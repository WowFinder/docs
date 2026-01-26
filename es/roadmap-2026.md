# Hoja de ruta - 2026

Este documento resume las prioridades en el proyecto WowFinder para la primera parte de 2026 y la justificación básica de las mismas.

1. `model`: Consolidación de código, garantizar 100% cobertura de tests. Esto es necesario para asegurar que el código importado del antiguo repo es consistente, y permitirá usar el módulo de manera estable en otros módulos.

1. `react-components`: Migración de toda la funcionalidad que ya existía en el antiguo repo, principalmente hojas de personaje y vista básica de conjuros y listas.

1. `bridge-electron` y nuevo repo para app de escritorio: envoltorios mínimos para exponer los componentes anteriores en una aplicación de escritorio.

1. `react-components`: componentes básicos de presentación y navegación web.

1. `bridge-https` y `web`: implementación en formato web (con Next.js) de la página principal y el acceso a contenidos públicos (conjuros y listas, objetos comunes, recetas estándar, etc).

Los primeros pasos van dirigidos a descartar por completo la versión monolítica de la aplicación, y los siguientes a proporcionar una interfaz básica de acceso a materiales de la campaña con la que reducir la dependencia de otros servicios como Google Drive (donde actualmente se alojan y comparten la mayoría de materiales para referencia de los jugadores).