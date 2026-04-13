# Buenas Prácticas y Arquitectura

## Estructura de Carpetas (comentarios para desarrolladores)
- components: Componentes reutilizables de la UI. Aquí se centralizan todos los elementos visuales que pueden ser usados en distintas partes de la aplicación.
- ui: Componentes de interfaz genéricos y reutilizables, como botones, tarjetas, formularios, etc.
- hooks: Hooks personalizados para lógica reutilizable. Ejemplo: `useVisitCounter` para el contador de visitas.
- lib: Funciones utilitarias y helpers. Aquí se colocan funciones auxiliares que pueden ser usadas por varios módulos.
- pages: Páginas principales de la aplicación. Cada archivo representa una vista o ruta principal.
- public: Archivos estáticos accesibles directamente, como imágenes y robots.txt.
- api: Endpoints de backend (por ejemplo, para el contador de visitas).

## Lineamientos Técnicos
- Uso de rutas alias (`@/components`, `@/hooks`, etc.) para importaciones limpias.
- Tipado estricto con TypeScript en estados, props y respuestas de API.
- Documentación mínima obligatoria (JSDoc) en hooks y funciones clave.
- Centralización de lógica común en lib.
- Manejo de errores y fallback en hooks críticos (ej. uso de localStorage en el contador de visitas).
- Separación clara de responsabilidades en la estructura de carpetas.

## Ejemplo de Importación con Alias
```ts
import { Button } from '@/components/ui/button'
import useVisitCounter from '@/hooks/useVisitCounter'
```

## Ejemplo de Tipado Estricto
```ts
interface VisitResponse {
  count: number
  lastVisit: string
}
```

## Ejemplo de Documentación en un Hook
```ts
/**
 * Hook para manejar el contador de visitas con fallback y manejo de errores.
 */
