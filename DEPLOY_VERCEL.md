# Guía: Cómo hacer Deploy a Vercel con el Contador de Visitas

## ✅ Pasos para Hacer Push a GitHub

### 1. Verifica que todo está listo
```bash
git status
```

Deberías ver archivos listos para commit:
- `api/visits.ts`
- `src/components/VisitCounter.tsx`
- `src/hooks/useVisitCounter.ts`
- `CONTADOR_VISITAS_SETUP.md`
- etc.

### 2. Commit de los cambios
```bash
git add .
git commit -m "Add visit counter functionality

- Added serverless API function /api/visits for visit tracking
- Created VisitCounter component with gradient design
- Added useVisitCounter hook with localStorage fallback
- Integrated visitor counter in App.tsx
- Added comprehensive setup documentation
- Counter displays in bottom-right corner
- Auto-increments on each page visit"
```

### 3. Push a GitHub
```bash
git push origin main
```

## 🌐 Vercel detectará automáticamente

Una vez que hagas push:
1. Vercel recibe notificación de GitHub
2. Detecta el `vercel.json` y `api/visits.ts`
3. Automáticamente:
   - Ejecuta `npm run build`
   - Despliega el proyecto
   - Despliega la función serverless `/api/visits`

**Tiempo estimado:** 1-2 minutos

## 📊 Verificar que funciona en Vercel

1. Abre tu sitio en Vercel (ej: `medescuento.vercel.app`)
2. Abre DevTools (F12 → Console)
3. Busca mensajes de error
4. Recarga la página varias veces
5. Verifica que el contador incrementa en la esquina inferior derecha

## 🔗 Links Útiles

- **GitHub Repository:** https://github.com/MEDescuentoSAS/Pagina-web-medescuento
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Dominio actual:** https://www.medescuento.com

## ⚙️ Si necesitas hacer cambios

### Cambiar diseño del contador
Edita: `src/components/VisitCounter.tsx`
```bash
npm run dev  # Verás cambios en tiempo real
git add src/components/VisitCounter.tsx
git commit -m "Update visit counter design"
git push
```

### Cambiar lógica del contador
Edita: `api/visits.ts`
```bash
npm run build  # Verifica que no hay errores
git add api/visits.ts
git commit -m "Update visit counter logic"
git push
```

### Agregar base de datos
1. Sigue guía en `CONTADOR_VISITAS_SETUP.md`
2. Actualiza `.env.example`
3. En Vercel → Settings → Environment Variables
4. Agrega las nuevas variables
5. Actualiza `api/visits.ts` para usar la BD
6. Push a GitHub

## 🐛 Solución de Problemas en Vercel

### Contador no incrementa
1. Vercel Dashboard → Deployments → selecciona el deploy
2. Logs → busca errores en `/api/visits`
3. Verifica Network tab en DevTools del navegador

### Error 500 en la API
1. Dashboard → Function Logs
2. Busca excepciones en `/api/visits`
3. Verifica que `/tmp` tiene permisos de escritura

### Variables de entorno no funcionan
1. Settings → Environment Variables
2. Verifica los nombres exactos
3. Haz un redeploy después de agregar variables
4. Deploy → Redeploy existing

## 📝 Checklist de Verificación

- [ ] Commit hecho con descripción clara
- [ ] Push a GitHub completado
- [ ] Vercel detectó los cambios (check en dashboard)
- [ ] Build completado sin errores
- [ ] Función `/api/visits` desplegada
- [ ] Sitio cargando correctamente
- [ ] Contador visible en esquina inferior derecha
- [ ] Contador incrementa al recargar

## 🎉 ¡Listo!

Tu contador de visitas está funcionando en producción.
Cada visitor que entre a www.medescuento.com incrementará el contador automáticamente.

---

**Próximos pasos (opcional):**
1. Implementar base de datos persistente (ver `CONTADOR_VISITAS_SETUP.md`)
2. Agregar analytics adicional
3. Mostrar datos históricos
