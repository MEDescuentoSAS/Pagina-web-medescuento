#!/usr/bin/env powershell
# Script para verificar que el contador está instalado correctamente

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "✅ VERIFICACIÓN DEL CONTADOR DE VISITAS" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$errors = 0

# Verificar archivos
Write-Host "📋 Verificando archivos..." -ForegroundColor Yellow

$files = @(
    "api/visits.ts",
    "api/tsconfig.json",
    "src/components/VisitCounter.tsx",
    "src/hooks/useVisitCounter.ts",
    "vercel.json",
    ".env.example",
    ".env.local",
    "CONTADOR_VISITAS_SETUP.md",
    "VISIT_COUNTER_SETUP.md",
    "IMPLEMENTACION_CONTADOR.md",
    "DEPLOY_VERCEL.md",
    "README_CONTADOR.md"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file" -ForegroundColor Red
        $errors++
    }
}

Write-Host ""

# Verificar dependencias
Write-Host "📦 Verificando dependencias..." -ForegroundColor Yellow
$packageJson = Get-Content "package.json" | ConvertFrom-Json

$devDeps = @("@vercel/node", "@types/node")
foreach ($dep in $devDeps) {
    if ($packageJson.devDependencies.$dep) {
        Write-Host "  ✓ $dep" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $dep" -ForegroundColor Red
        $errors++
    }
}

Write-Host ""

# Verificar Git status
Write-Host "📝 Estado de Git..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    $lines = @($gitStatus -split "`n")
    Write-Host "  ✓ Cambios detectados: $($lines.Count) archivos" -ForegroundColor Green
    Write-Host "    (Debes hacer git add . && git commit && git push)" -ForegroundColor Yellow
} else {
    Write-Host "  ✓ Todos los cambios están commiteados" -ForegroundColor Green
}

Write-Host ""

# Verificar configuración
Write-Host "⚙️ Verificando configuración..." -ForegroundColor Yellow

# Verificar App.tsx
$appTsx = Get-Content "src/App.tsx"
if ($appTsx -match "VisitCounter") {
    Write-Host "  ✓ VisitCounter integrado en App.tsx" -ForegroundColor Green
} else {
    Write-Host "  ✗ VisitCounter no encontrado en App.tsx" -ForegroundColor Red
    $errors++
}

# Verificar tsconfig exclusión
$tsconfigApp = Get-Content "tsconfig.app.json"
if ($tsconfigApp -match '"api"') {
    Write-Host "  ✓ Carpeta 'api' excluida de tsconfig.app.json" -ForegroundColor Green
} else {
    Write-Host "  ✗ Carpeta 'api' no está excluida" -ForegroundColor Red
    $errors++
}

Write-Host ""

# Resumen
Write-Host "============================================" -ForegroundColor Cyan

if ($errors -eq 0) {
    Write-Host "✅ TODO ESTÁ CORRECTO" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Próximos pasos:" -ForegroundColor Green
    Write-Host "  1. npm run dev              # Verificar localmente" -ForegroundColor Gray
    Write-Host "  2. git add ." -ForegroundColor Gray
    Write-Host "  3. git commit -m 'Add visit counter'" -ForegroundColor Gray
    Write-Host "  4. git push" -ForegroundColor Gray
    Write-Host "  5. Vercel despliega automáticamente" -ForegroundColor Gray
    exit 0
} else {
    Write-Host "❌ $errors error(s) encontrados" -ForegroundColor Red
    exit 1
}
