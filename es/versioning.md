# Estrategia de versionado para el Proyecto de Wowfinder

Este proyecto y sus repositorios siguen principalmente la especificación [Versionado Semántico 2.0.0](https://semver.org/)  .

## Desarrollo de versiones iniciales

El [Versionado Semántico 2.0.0](https://semver.org/) asume que `0.y.z` es inestable y puede cambiar en cualquier momento. Si bien esto es inherentemente cierto en una etapa tan temprana, el proyecto WowFinder agrega restricciones adicionales centradas en la _intención_ para las versiones dentro de este rango.

### Desarrollo volatil: 0.0.z

Las versiones en el rango `0.0.z` son consideradas volatiles y pueden cambiar en cualquier momento. En este rango, asumir asumir que cualquier version puede introcucir cambios importantes. De hecho, en esta etapa han sido rediseñadas toda una serie de API's.
