@echo off
REM Script para hacer deploy del contador de visitas a Vercel

echo.
echo ============================================
echo    DEPLOY DEL CONTADOR A VERCEL
echo ============================================
echo.

echo Paso 1: Agregando cambios...
git add .
echo ✓ Cambios agregados

echo.
echo Paso 2: Creando commit...
git commit -m "Add visit counter - Incrementa automáticamente con cada visita"
echo ✓ Commit creado

echo.
echo Paso 3: Enviando a GitHub...
git push
echo ✓ Push completado

echo.
echo ============================================
echo ✅ DEPLOY INICIADO
echo ============================================
echo.
echo Vercel está procesando tu deploy...
echo Tiempo estimado: 1-2 minutos
echo.
echo Abre tu sitio en:
echo https://www.medescuento.com
echo.
echo El contador estará en la esquina inferior derecha
echo.
pause
