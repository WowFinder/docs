# Estrategia de versionado para el Proyecto de Wowfinder

Este proyecto y sus repositorios siguen principalmente la especificación [Versionado Semántico 2.0.0](https://semver.org/)  .

## Desarrollo de versiones iniciales

El [Versionado Semántico 2.0.0](https://semver.org/) asume que `0.y.z` es inestable y puede cambiar en cualquier momento. Si bien esto es inherentemente cierto en una etapa tan temprana, el proyecto WowFinder agrega restricciones adicionales centradas en la _intencion_ para las versiones dentro de este rango.

### Desarrollo volátil: 0.0.z

Las versiones en el rango `0.0.z` son consideradas volátiles y pueden cambiar en cualquier momento. En este rango, asumir que cualquier versión puede introducir cambios importantes. De hecho, en esta etapa han sido rediseñadas toda una serie de API's.

### Desarrollo semi-estable: 0.y.z (y > 0)

Al aumentar el valor numérico del número de versión (`y`) denota _intención de estabilidad_. Este hecho significa que, desde la perspectiva del autor, la API está razonablemente cerca de su forma final prevista. Puede ser que haya una ruptura accidental, pero los cambios deberían más predecibles.

Supongamos que en esta etapa, al aumentar de versión, se pueden dar cambios importantes, pero las versiones del parche van destinadas con la _intención_ de no romperse.

## Criterios para 1.x

Los criterios al toparse con el primer número con mayor valor numérico de versión de un módulo es levemente deferente para los módulos de la biblioteca y de los del usuario final (aplicación), pero siguen una filosofía similar.

Para cualquier módulo, en algún punto de la duración del desarrollo temprano, se debe definir un _objetivo con una característica de referencia_. Al alcanzar un módulo de 1.x, las versiones deben alcanzar ese objetivo, además de todos los criterios para considerarla estable.

### Inspección de Calidad del Sonar

Cualquier módulo que alcance 1.x debe ser configurado para el análisis de SonarCloud y mantener una calidad al menos tan estricta como la que se considera la calidad base de todo el proyecto. Además, tiene que tener la protección de la rama `main` activado.

Incluso dentro de estas restricciones, una sub-parte del código puede eventualmente empezar a ser fusionada. Bajo ninguna circunstancia se debe etiquetar y/o publicar ninguna versión de `1.x` sin pasar la verificación de Control de Calidad.

En el momento de publicar este documento, el Control de Calidad base del proyecto es el predeterminado de SonarCloud, que se puede resumir de la siguiente manera:

- Al menos un 80% de cobertura de prueba en código nuevo (para PRs) o código general (en la rama "principal" en el momento del lanzamiento).
- Calificación de fiabilidad A. Para las solicitudes de extracción (PRs), esto significa que no se introducen nuevos errores de forma consciente. Tenga en cuenta que pueden existir errores o problemas más allá de lo que el análisis automatizado puede detectar.
- Calificación de seguridad A. Para las PR, esto significa que no se introducen nuevas vulnerabilidades de seguridad a sabiendas y que todos los puntos críticos de seguridad se revisan conscientemente.
- Calificación de mantenibilidad A. Para las PR, esto limita la cantidad, defectos de código u otros pequeños problemas permitidos. Esto podría permitir que la deuda técnica y los defectos de codigo se acumulen con el tiempo, por lo que es importante verificar que la revisión de calidad en la rama `main` antes de cualquier lanzamiento. Si se alcanza un "punto de inflexión", haciendo que falle la revisión de calidad, el esfuerzo en ese proyecto debe centrarse inmediatamente en abordar la calidad del código antes de que se pueda realizar cualquier lanzamiento.
- Límites estrictos en la duplicación: el valor predeterminado de SonarCloud es menos o igual al 3% de duplicación en código nuevo para PR y menos o igual al 3% de duplicación en el código general para la rama `main`.
