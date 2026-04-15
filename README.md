# Buenas Prácticas y Arquitectura

## Estructura de Carpetas
- **components/**: Componentes reutilizables de la UI. Centraliza elementos visuales reutilizables.
- **components/ui/**: Componentes de interfaz genéricos (botones, tarjetas, formularios, etc.).
- **hooks/**: Hooks personalizados para lógica reutilizable. Ejemplo: `useVisitCounter` para el contador de visitas.
- **lib/**: Funciones utilitarias y helpers compartidos.
- **pages/**: Vistas principales de la aplicación, cada archivo representa una ruta.
- **public/**: Archivos estáticos accesibles directamente (imágenes, robots.txt, etc.).
- **api/**: Endpoints backend (por ejemplo, para el contador de visitas).

## Principios de Arquitectura
- **Componentización**: Divide la UI en componentes pequeños, reutilizables y de única responsabilidad.
- **Separación de responsabilidades**: Mantén lógica, presentación y datos desacoplados.
- **Hooks para lógica reutilizable**: Extrae lógica repetida en hooks personalizados.
- **Centralización de utilidades**: Usa `lib/` para helpers y lógica común.
- **Tipado estricto**: Usa TypeScript para tipar props, estados y respuestas de API.
- **Documentación mínima**: Usa JSDoc en hooks y funciones clave.
- **Manejo de errores**: Implementa fallback y manejo de errores en hooks críticos (ejemplo: uso de localStorage).
- **Importaciones limpias**: Usa rutas alias (`@/components`, `@/hooks`, etc.) para evitar rutas relativas largas.
- **Estilos desacoplados**: Utiliza Tailwind CSS para estilos utilitarios y consistentes.

## Buenas Prácticas
- Nombra archivos y carpetas en inglés y en minúsculas, usando kebab-case o camelCase según convención del proyecto.
- Prefiere componentes funcionales y hooks sobre clases.
- Mantén los componentes lo más puros posible (sin efectos secundarios innecesarios).
- Evita lógica compleja en los componentes de presentación; extrae a hooks o utilidades.
- Usa destructuring para props y estados.
- Documenta props y funciones públicas.

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
 * @returns {number} count - Número de visitas
 */
```

## Ejemplo de Manejo de Errores en un Hook
```ts
try {
  // lógica principal
} catch (error) {
  // fallback o manejo de error
}
```

## Recursos Recomendados
- [Guía de Componentes React](https://react.dev/learn/component-basics)
- [Convenciones de TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
