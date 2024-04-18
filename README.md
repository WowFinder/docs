# WowFinder Documentation

Shared documentation accross the WowFinder project

---

These documents describe guidelines and conventions that should apply to all the WowFinder project:

- [Node Package Scripts](en/node-package-scripts.md): scripts that should be available in the `package.json` file of any node-based repostory within the project.
- [Labels](en/issue-labels.md): labels that should be available in the GitHub issue tracker of any repository within the project.
- [Versioning strategy](en/versioning.md): the versioning strategy for the project.
- [ESLint configuration](en/eslint-rules.md): the ESLint recommended configuration and rules for the project.
- [TypeScript configuration](en/typescript.md): the TypeScript recommended configuration for the project.
- [Jest configuration](/en/jest-settings.md): the Jest recommended configuration for the project.
- Build process (upcoming): the default built process for modules in the project (used by all library modules and optionally by application modules).
- GitHub Actions (upcoming): the GitHub Actions recommended configuration for the project.
- SonarCloud guidelines (upcoming): the SonarCloud recommended configuration for the project.

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
| [docs](https://github.com/WowFinder/docs) | `strict` | MD | [@edurne85](https://github.com/edurne85)  | -     | This documentation |
| [raw-assets](https://github.com/WowFinder/raw-assets) | `migration` | Json5 | [@edurne85](https://github.com/edurne85) | - | Raw asset files for the WowFinder campaign |
| [asset-schemas](https://github.com/WowFinder/asset-schemas) | `strict` | TS | [@edurne85](https://github.com/edurne85) | [@wowfinder/asset-schemas](https://www.npmjs.com/package/@wowfinder/asset-schemas) | Types and validation for the raw assets |
| [ts-enums](https://github.com/WowFinder/ts-enums) | `strict` | TS | [@edurne85](https://github.com/edurne85) | [@wowfinder/ts-enums](https://www.npmjs.com/package/@wowfinder/ts-enums) | TypeScript enums for the WowFinder project |
| [ts-utils](https://github.com/WowFinder/ts-utils) | `strict` | TS | [@edurne85](https://github.com/edurne85) | [@wowfinder/ts-utils](https://www.npmjs.com/package/@wowfinder/ts-utils) | TypeScript utilities for the WowFinder project |
| [model](https://github.com/WowFinder/model) | `migration` | TS | [@edurne85](https://github.com/edurne85) | - | Rules and types model for the WowFinder project |
| [core-node](https://github.com/WowFinder/core-node) | `none` | TS | [@edurne85](https://github.com/edurne85) | - | (upcoming) |
| [react-components](https://github.com/WowFinder/react-components) | `migration` | TS, React | [@edurne85](https://github.com/edurne85) | [@wowfinder/react-components](https://www.npmjs.com/package/@wowfinder/react-components) | React-based components for the WowFinder apps (desktop, native, and web) |
| [translations](https://github.com/WowFinder/translations) | `none` | TS | [@edurne85](https://github.com/edurne85) | - | (upcoming) |
| [bridge-electron](https://github.com/WowFinder/bridge-electron) | `none` | TS | [@edurne85](https://github.com/edurne85) | - | (upcoming) |
| [bridge-https](https://github.com/WowFinder/bridge-https) | `migration` | TS | [@edurne85](https://github.com/edurne85) | [@wowfinder/bridge-https](https://www.npmjs.com/package/@wowfinder/bridge-https) | Web-based bridge code to facilitate accessing back-end(s) via https |
| [Wowfinder-Wicki](https://github.com/WowFinder/Wowfinder-Wicki) | `learning` | JS, TS, React | [@AndreaKinder](https://github.com/AndreaKinder) | - | (description not available) |

## Team and contributors

This project began as a single-person undertaking by the campaign's Game Master, but has started receiving tangible contributions from one of the players, and may open up to more external collaboration. In addition, there is a desire to recognize the implicit role of the campaign's players as beta-testers (and sometimes stress-testers) of the game mechanics and some of the tools. 

| Main title | Name or alias [^name] | Effective role(s) [^roles] |
|------------|-----------------------|----------------------------|
| **The** Master | [@edurne85](https://github.com/edurne85) | Project Owner / Lead Software Engineer Architect stand-in |
| Apprentice | [@AndreaKinder](https://github.com/AndreaKinder)<br>_Keina_ | Junior Fullstack Developer in training<br>_Druidric cuddlebear_ |
| Player | _Garet_ | _Summoning stress-tester_<br>_GM's spellcasting headache_ |
| Player | _Mythea_ | _Two-handed diplomacy_ |
| Player | _Voljard_ | _Raging furry_ |
| Player | _Dael_ | _Power gamer_<br>_Potential Rules Laywer_ |
| Player | _Bhuldirm_ | _Non-artificial non-intelligence_ |
| Player | _Kaliri_ | _The blurriness in the n/sfw line_ |

[^name]: Contributors with at least some activity in GitHub will be listed by their GitHub username. For players, character name will be used by default, but real names or other aliases (within reason) can be used in agreement between the Project owner and the contributor. Character names (or any name that makes sense only within the fictional setting of the campaign) are highlighted in _italics_ for transparency.

[^roles]: Pseudo-role titles in _italics_ refer more to in-game character behaviour than any real-world role.
