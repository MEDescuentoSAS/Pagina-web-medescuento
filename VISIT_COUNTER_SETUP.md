# Configuración del Contador de Visitas

## 📊 Estado Actual
El contador de visitas está implementado con un fallback a `localStorage` para desarrollo. En Vercel, usa la función serverless `/api/visits.ts`.

## 🚀 Opciones de Implementación

### Opción 1: SQLite + Vercel (Recomendado para inicio)
Requiere dependencias mínimas y funciona con Vercel gratis.

```bash
npm install better-sqlite3
```

**Paso a paso:**
1. Reemplaza el contenido de `api/visits.ts` con la versión SQLite
2. Vercel detectará automáticamente que es una función Node.js

### Opción 2: Firebase Realtime Database
La más fácil de usar y con generoso plan gratuito.

**Pasos:**
1. Crea un proyecto en Firebase: https://console.firebase.google.com
2. Habilita Realtime Database
3. Instala Firebase:
```bash
npm install firebase
```

4. Crea `src/lib/firebase.ts`:
```typescript
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
```

5. Actualiza `.env.local`:
```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_DATABASE_URL=tu_database_url
```

### Opción 3: Supabase
PostgreSQL con interfaz sencilla.

**Pasos:**
1. Regístrate en https://supabase.com
2. Crea un nuevo proyecto
3. Instala el cliente:
```bash
npm install @supabase/supabase-js
```

4. Crea `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export default supabase;
```

### Opción 4: MongoDB + Vercel
Para apps más robustas.

**Pasos:**
1. Crea una cuenta en MongoDB Atlas: https://www.mongodb.com/cloud/atlas
2. Crea una base de datos
3. Instala Mongoose:
```bash
npm install mongoose
```

## 📝 Variables de Entorno para Vercel

En https://vercel.com/dashboard, ve a Project Settings > Environment Variables y agrega:

- Para Firebase:
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - etc...

- Para Supabase:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

- Para MongoDB:
  - `MONGODB_URI`

## 🧪 Prueba Local

```bash
npm run dev
```

Abre http://localhost:8080 y verás el contador en la esquina inferior derecha.
Cada recarga incrementará el número (usa localStorage como fallback).

## 🌐 Deploy a Vercel

```bash
npm run build
git add .
git commit -m "Add visit counter"
git push
```

Vercel detectará automáticamente los cambios y desplegará.

## 🔒 Seguridad

- El contador actual es básico y puede ser modificado por usuarios (localStorage)
- Para producción, usa una base de datos real con autenticación
- Verifica que las reglas de seguridad de Firebase/Supabase sean restrictivas

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12 > Console)
2. Verifica que la API `/api/visits` esté respondiendo
3. Comprueba las variables de entorno en Vercel
