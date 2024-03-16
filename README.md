# WowFinder Documentation

Shared documentation accross the WowFinder project

---

These documents describe guidelines and conventions that should apply to all the WowFinder project:

- [Node Package Scripts](en/node-package-scripts.md): scripts that should be available in the `package.json` file of any node-based repostory within the project.
- [Labels](en/issue-labels.md): labels that should be available in the GitHub issue tracker of any repository within the project.

## Rules Enforcement Levels

The _Rules Enforcement Level_ (or `REL` for short) for a project define the strictness of the rules that should be enforced in the project. The following levels are available:

- `none`: The project is not subject to any rules. This only applies to projects that are in a transitory state and to 3rd-party dependencies.
- `learn`: The project is a learning exercise or experiment. Following the guidelines is advisable and encouraged, but they are not enforced.
- `migration`: The project is in the process of being migrated to the WowFinder project. The guidelines should be followed, but the project may not be fully compliant yet. Each commit should, and each pull request must, at least, maintain the same level of compliance as the previous state of the project, increasing and improving whenever feasible.
- `strict`: The project is available to end users and should be fully compliant with all applicable guidelines and conventions.

## Repositories summary

These are the repositories currently included in the project, and some quick details about them:

| Repository | REL    | Langs | Maintainer | npmjs | Description |
|------------|--------|-------|------------|-------|-------------|
| [docs](https://github.com/WowFinder/docs) | `strict` | MD | @edurne85  | -     | This documentation |
| [raw-assets](https://github.com/WowFinder/raw-assets) | `migration` | Json5 | @edurne85 | - | Raw asset files for the WowFinder campaign |
| [asset-schemas](https://github.com/WowFinder/asset-schemas) | `migration` | TS | @edurne85 | [@wowfinder/asset-schemas](https://www.npmjs.com/package/@wowfinder/asset-schemas) | Types and validation for the raw assets |
| [ts-enums](https://github.com/WowFinder/ts-enums) | `migration` | TS | @edurne85 | [@wowfinder/ts-enums](https://www.npmjs.com/package/@wowfinder/ts-enums) | TypeScript enums for the WowFinder project |
| [ts-utils](https://github.com/WowFinder/ts-utils) | `migration` | TS | @edurne85 | [@wowfinder/ts-utils](https://www.npmjs.com/package/@wowfinder/ts-utils) | TypeScript utilities for the WowFinder project |
| [model](https://github.com/WowFinder/model) | `migration` | TS | @edurne85 | - | Rules and types model for the WowFinder project |
| [core-node] | `none` | TS | @edurne85 | - | (upcoming) |
| [react-components] | `none` | TS | @edurne85 | - | (upcoming) |
| [translations] | `none` | TS | @edurne85 | - | (upcoming) |
| [bridge-electron] | `none` | TS | @edurne85 | - | (upcoming) |
| [Wowfinder-Wicki](https://github.com/WowFinder/Wowfinder-Wicki) | `learning` | JS, TS, React | @AndreaKinder | - | (description not available) |
