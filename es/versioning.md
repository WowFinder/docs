# Estrategia de versionado para el Proyecto de Wowfinder

Este proyecto y sus repositorios siguen principalmente la especificación [Versionado Semántico 2.0.0](https://semver.org/lang/es/) . Este documento describe pautas adicionales sobre aspectos que no están completamente definidos por SemVer.

## Desarrollo de versiones iniciales

El [Versionado Semántico 2.0.0](https://semver.org/) asume que `0.y.z` es inestable y puede cambiar en cualquier momento. Si bien esto es inherentemente cierto en una etapa tan temprana, el proyecto WowFinder agrega restricciones adicionales centradas en la _intencion_ para las versiones dentro de este rango.

### Desarrollo volátil: 0.0.z

Las versiones en el rango `0.0.z` son consideradas volátiles y pueden cambiar en cualquier momento. En este rango, asumir que cualquier versión puede introducir cambios incompatibles. De hecho, en esta etapa han sido rediseñadas toda una serie de API's.

### Desarrollo semi-estable: 0.y.z (y > 0)

Al aumentar el valor numérico del componente menor de la versión (y), se indica una intención de introducir cambios no compatibles. Esto significa que, desde la perspectiva del autor, la API puede experimentar modificaciones significativas que no garantizan la compatibilidad con versiones anteriores. Puede ser que haya una ruptura accidental, pero los cambios deberían ser más predecibles.

Supongamos que en esta etapa, al aumentar de versión menor, se pueden dar cambios importantes y no compatibles, pero las versiones del parche (z) van destinadas con la intención de mantener la estabilidad y de no introducir cambios que rompan la compatibilidad.

## Criterios para 1.x

Los criterios al toparse con el primer número con mayor valor numérico de versión de un módulo es levemente diferente para los módulos de la biblioteca y de los del usuario final (aplicación), pero siguen una filosofía similar.

Para cualquier módulo, en algún punto de la duración del desarrollo temprano, se debe definir un _objetivo con una característica de referencia_. Al alcanzar un módulo de 1.x, las versiones deben alcanzar ese objetivo, además de todos los criterios para considerarla estable.

### Inspección de Calidad del Sonar

Cualquier módulo que alcance 1.x debe ser configurado para el análisis de SonarCloud y mantener una calidad al menos tan estricta como la que se considera la calidad base de todo el proyecto. Además, tiene que tener la protección de la rama `main` activado.

Incluso dentro de estas restricciones, un código deficiente puede eventualmente empezar a ser fusionada. Bajo ninguna circunstancia se debe etiquetar y/o publicar ninguna versión de `1.x` sin pasar la verificación de Quality Gate.

En el momento de publicar este documento, el Quality Gate base del proyecto es el predeterminado de SonarCloud, que se puede resumir de la siguiente manera:

- Al menos un 80% de cobertura de prueba en código nuevo (para PRs) o código general (en la rama `main` en el momento del lanzamiento).
- Calificación de fiabilidad A (Reliability rating). Para las solicitudes de extracción (PRs), esto significa que no se introducen nuevos errores de forma consciente. Tenga en cuenta que pueden existir errores o problemas más allá de lo que el análisis automatizado puede detectar.
- Calificación de seguridad A (Secuirity rating). Para las PR, esto significa que no se introducen nuevas vulnerabilidades de seguridad a sabiendas y que todos los puntos críticos de seguridad se revisan conscientemente.
- Calificación de mantenibilidad A (Maintainability rating). Para las PR, esto limita la cantidad, defectos de código u otros pequeños problemas permitidos. Esto podría permitir que la deuda técnica y los defectos de codigo se acumulen con el tiempo, por lo que es importante verificar que la revisión de calidad en la rama `main` antes de cualquier lanzamiento. Si se alcanza un "punto de inflexión", haciendo que falle la revisión de calidad, el esfuerzo en ese proyecto debe centrarse inmediatamente en abordar la calidad del código antes de que se pueda realizar cualquier lanzamiento.
- Límites estrictos en la duplicación: el valor predeterminado de SonarCloud es menos o igual al 3% de duplicación en código nuevo para PR y menos o igual al 3% de duplicación en el código general para la rama `main`.

### Clean lint

Cualquier módulo que alcance la versión 1.x debe tener una configuración de linting funcional. En un futuro cercano, se publicarán aquí las reglas globales para todos los proyectos aplicables.

Cualquier versión etiquetada debe pasar las reglas de linting sin errores y con un mínimo de advertencias. Se publicarán directrices más explícitas sobre el límite de advertencias antes de que cualquier módulo llegue a esta etapa.

### Documentación de referencia

El propósito del módulo y el razonamiento de cualquier elección de tecnología deben documentarse antes del primer lanzamiento estable. Esto es para asegurar que el módulo tenga un propósito y un conjunto de tecnologías claros antes de que pueda considerarse "estable".

Como línea base, hay varias opciones globales para las tecnologías utilizadas en todo el proyecto. Los repositorios que se adhieran a estas opciones no necesitan proporcionar más documentación sobre ellas (el razonamiento de estas opciones se publicará aquí en un futuro próximo).

### Opciones tecnológicas globales

- TypeScript: la primera elección de idioma para todos los módulos del proyecto debe ser TypeScript. Hay algunos proyectos experimentales que utilizan JS simple, pero estos no deberían alcanzar una versión estable de esa forma.
- Jest: la primera opción de marco de prueba para todos los módulos del proyecto debe ser Jest.
- Runtimes: para los módulos backend y core, la primera opción de runtime debe ser la última versión LTS de Node.js. Los módulos frontend deben basar su elección de APIs en el entorno de runtime esperado.
- Frameworks: se utilizan varios frameworks y utilidades en todo el proyecto. Éstas deberían ser la primera opción para algunos escenarios comunes:
    - Electron para aplicaciones de escritorio.
    - Apache Cordova para aplicaciones moviles.
    - Cumplimiento estricto de los estándares web y las mejores prácticas modernas para aplicaciones web.
    - React 18 para cualquier interfaz. Se prefieren los componentes funcionales (y hooks) a los componentes basados en clases; y el código debe depender del sistema de tipos de TS para la validación de componentes.
    - Backend: actualmente, no existe una elección estricta de marco para los módulos de backend más allá del tiempo de ejecución.
    - JSON y JSON5 como los formatos principales de almacenamiento y transporte de datos. La compresión a nivel de protocolo es perfectamente aceptable, y la gestión explícita de la compresión puede utilizarse cuando la compresión a nivel de protocolo no está disponible o no es suficiente, pero la justificación debe estar claramente documentada. Se prefiere JSON5 para cualquier dato gestionado por humanos, pero JSON simple está perfectamente bien para el transporte de datos entre módulos (es decir, entre un módulo frontend y un backend).
  - GraphQL será la principal opción para definir contratos de red.
