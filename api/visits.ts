import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

// Usar un archivo JSON en /tmp para almacenar el contador (compatible con Vercel)
const getDataFile = () => {
  // En Vercel, /tmp es el único directorio escribible
  const filePath = process.env.VERCEL ? '/tmp/visits.json' : path.join(process.cwd(), 'visits.json');
  return filePath;
};

interface VisitData {
  count: number;
  lastUpdated: string;
  history?: Array<{ timestamp: string; ip?: string }>;
}

const initializeData = (): VisitData => ({
  count: 22000,
  lastUpdated: new Date().toISOString(),
  history: [],
});

const readVisitData = (): VisitData => {
  try {
    const filePath = getDataFile();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading visit data:', error);
  }
  return initializeData();
};

const writeVisitData = (data: VisitData): void => {
  try {
    const filePath = getDataFile();
    const dir = path.dirname(filePath);
    
    // Crear directorio si no existe (solo en desarrollo)
    if (!process.env.VERCEL && !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing visit data:', error);
  }
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Leer datos actuales
      const visitData = readVisitData();
      
      // Incrementar contador
      visitData.count += 1;
      visitData.lastUpdated = new Date().toISOString();
      
      // Registrar en historial (últimas 1000 visitas)
      if (!visitData.history) {
        visitData.history = [];
      }
      
      const clientIp = req.headers['x-forwarded-for'] || 
                       req.headers['x-real-ip'] || 
                       req.socket.remoteAddress || 
                       'unknown';
      
      visitData.history.push({
        timestamp: new Date().toISOString(),
        ip: typeof clientIp === 'string' ? clientIp.split(',')[0] : 'unknown',
      });
      
      // Mantener solo las últimas 1000 visitas
      if (visitData.history.length > 1000) {
        visitData.history = visitData.history.slice(-1000);
      }
      
      // Guardar datos
      writeVisitData(visitData);

      return res.status(200).json({
        success: true,
        visits: visitData.count,
        lastUpdated: visitData.lastUpdated,
      });
    }

    if (req.method === 'POST') {
      if (req.query.action === 'reset') {
        // Resetear contador (requeriría autenticación en producción)
        const newData = initializeData();
        writeVisitData(newData);
        return res.status(200).json({
          success: true,
          message: 'Visit counter reset',
          visits: newData.count,
        });
      }

      if (req.query.action === 'get') {
        // Obtener datos sin incrementar
        const visitData = readVisitData();
        return res.status(200).json({
          success: true,
          visits: visitData.count,
          lastUpdated: visitData.lastUpdated,
        });
      }
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in visits handler:', error);
    
    // Fallback: devolver el contador actual sin guardar
    try {
      const visitData = readVisitData();
      return res.status(200).json({
        success: true,
        visits: visitData.count,
        lastUpdated: visitData.lastUpdated,
        warning: 'Increment operation failed, returning cached value',
      });
    } catch {
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
        visits: 0,
      });
    }
  }
} 