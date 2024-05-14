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