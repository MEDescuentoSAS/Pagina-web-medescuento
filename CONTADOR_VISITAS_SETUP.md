# 🚀 Instalación y Configuración del Contador de Visitas

## ✅ Estado Actual
- ✓ Proyecto instalado y corriendo correctamente en `http://localhost:8080`
- ✓ Contador de visitas implementado con fallback a localStorage
- ✓ Función serverless creada en `/api/visits.ts`
- ✓ Build de producción completado sin errores

## 📋 Instrucciones Rápidas

### 1. **Proyecto en Desarrollo**
El proyecto está corriendo actualmente. El contador de visitas se muestra en la esquina inferior derecha con:
- Un icono de ojo
- El número actual de visitas
- La etiqueta "Visitas"

### 2. **Cómo Funciona**
1. Cuando alguien entra a la página, el componente `<VisitCounter />` se monta
2. Se realiza una llamada a `/api/visits` (GET)
3. La API incrementa el contador y devuelve el nuevo valor
4. Si la API no está disponible, usa localStorage como fallback

### 3. **Para Desplegar en Vercel**

#### Opción A: Usar el Almacenamiento de Vercel (Recomendado para inicio)
Actualmente la API usa archivos JSON en `/tmp`, pero esto no persiste entre redeployes.

**Para persistencia real, elige una opción B, C o D abajo.**

#### Opción B: Firebase Realtime Database
1. Crea un proyecto en https://console.firebase.google.com
2. Habilita Realtime Database
3. Instala Firebase localmente:
   ```bash
   npm install firebase
   ```

4. Crea el archivo `src/lib/firebase.ts`:
   ```typescript
   import { initializeApp } from 'firebase/app';
   import { getDatabase } from 'firebase/database';

   const config = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
     databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
   };

   const app = initializeApp(config);
   export const db = getDatabase(app);
   ```

5. En Vercel, agrega las variables de entorno (Settings > Environment Variables):
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_DATABASE_URL`

#### Opción C: Supabase (PostgreSQL)
1. Regístrate en https://supabase.com
2. Crea un nuevo proyecto
3. En SQL Editor, ejecuta:
   ```sql
   CREATE TABLE visit_counter (
     id BIGINT PRIMARY KEY,
     count INT DEFAULT 0,
     last_updated TIMESTAMP DEFAULT NOW()
   );

   INSERT INTO visit_counter (id, count) VALUES (1, 0);
   ```

4. Instala Supabase:
   ```bash
   npm install @supabase/supabase-js
   ```

5. En Vercel, agrega:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

#### Opción D: MongoDB + Atlas
1. Crea una cuenta en https://www.mongodb.com/cloud/atlas
2. Instala mongoose:
   ```bash
   npm install mongoose
   ```

3. En Vercel, agrega:
   - `MONGODB_URI`

### 4. **Archivos Agregados**

```
proyecto/
├── api/
│   ├── visits.ts           # Función serverless
│   └── tsconfig.json       # Config TypeScript para API
├── src/
│   ├── components/
│   │   └── VisitCounter.tsx    # Componente visual
│   ├── hooks/
│   │   └── useVisitCounter.ts  # Hook personalizado
├── .env.local              # Variables de entorno locales
├── .env.example            # Ejemplo de variables
├── vercel.json            # Config de Vercel
└── VISIT_COUNTER_SETUP.md # Guía de configuración
```

### 5. **Comando para Deploy**

```bash
# Compilar
npm run build

# Push a GitHub
git add .
git commit -m "Add visit counter"
git push

# Vercel detectará automáticamente los cambios
```

### 6. **Verificar que Funciona**

En desarrollo:
1. Abre http://localhost:8080
2. Abre DevTools (F12)
3. Console > Verifica que no hay errores rojos
4. Recarga la página varias veces
5. El contador en la esquina inferior derecha debe incrementarse

En producción (Vercel):
1. Abre tu sitio en Vercel
2. Abre DevTools
3. Recarga varias veces
4. El contador debe incrementarse

## 🔧 Solución de Problemas

### El contador no incrementa
1. Verifica que `/api/visits` está siendo llamada (Network tab en DevTools)
2. Comprueba que no hay errores en la consola
3. Verifica que `.env.local` está configurado correctamente

### La API devuelve 500
1. En desarrollo, revisa el terminal donde corre `npm run dev`
2. En Vercel, revisa el dashboard de Analytics > Logs
3. Comprueba que las variables de entorno están configuradas

### El contador no persiste
1. Necesitas implementar una base de datos real (opciones B, C, D arriba)
2. Actualmente solo persiste en `/tmp` que se resetea

## 📚 Recursos Útiles

- [Documentación de Vercel Functions](https://vercel.com/docs/functions/runtimes)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [Supabase Documentation](https://supabase.com/docs)
- [MongoDB Atlas](https://docs.atlas.mongodb.com)

## ✨ Próximos Pasos

1. Elige una opción de base de datos (B, C o D)
2. Configura las variables de entorno
3. Actualiza la API para usar la BD elegida
4. Deploy a Vercel
5. ¡Disfruta viendo crecer tu contador de visitas! 📈
