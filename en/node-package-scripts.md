# `package.json` scripts

This document summarizes the conventions applicable to `package.json` scripts within the WowFinder project. Any module published under the `@wowfinder` scope shomustuld adhere to these conventions for consistency.

Note: yarn (version 4.x) should be used accross the project.

## Script descriptions

### Auxiliary scripts

- `noop`: in some cases, a required script may make no sense for a given repository. For such scenarios, including a `noop` script is recommended so those scripts can simply alias to it (thus making explicit the intent of doing nothing). While there are many ways to achieve a no-op sciprt in a POSIX-like environment, the use of `true` is preferred as a healthy balance between conciseness, readability, and portability.

### Code quality management

For JS and TS, `eslint` is the preferred linter, and `prettier` is the preferred formatter. If a project needs to handle other languages, it is acceptable to use other tools.

In addition, `skott` is being used to assist with dependency analysis in JS / TS code.

- `lint`: run the package's linter(s) on "validation" mode (ie: it should report errors, but apply no changes to the code). For `eslint`, this is the default behavior. Here are some example `lint` scripts for typical cases:

A default `lint` script should be available for all packages in the WowFinder project. If there is absolutely no need for linting, it should be mapped to the `noop` script.

- `lint:fix`: run the package's linter(s) on "fix" mode (ie: it should attempt to automatically fix code issues whenever possible and reasonably safe). This script is regarded as optional, but preferred whenever the linter is capable of some degree of automatic code fixing.

- `prettier`: ⚠️ Deprecated. See `format`.
- `format`: run the package's code formatter(s) on "fix" mode.
- `format:check`: run the package's code formatter(s) on "validation" mode (ie: it should report errors, but apply no changes to the code).
- `skott:web`: produces a web-based interactive graph of module dependencies within the package. This script is not strictly required, as it's only run manually as a development and code design aid, but highly advisable on any module with non-trivial dependency graphs.
- `skott:circular`: checks for circular dependencies (omitting type-only references) within the module, producing command-line output. This script is required and should be included in the CI processes for any module using `import` and/or `require` statements in JS / TS.

- `checks:quick`: run the faster local checks. The exact checks to be run are up to the package's maintainers, and should aim for the best balance between catching common issues and running quickly. Parallel exectution via `npm-run-all` is preferred whenever possible.
- `checks:standard`: run the standard local checks. The exact checks to be run are up to the package's maintainers, but should include linting, formatting, type checking, testing, and circular dependency checks. Parallel exectution via `npm-run-all` is preferred whenever possible. The checks from this script should be essentially equivalent to the CI checks (but the CI setup script may use different commands and setups to work in the GitHub Actions environment).
- `checks:full`: run all local checks and potential automatic fixes. Any checks available locally (including variants that automatically apply fixes) should be covered by this script. Parallel exectution via `npm-run-all` is preferred whenever possible.
- `checks:pedantic`: run all local checks and reporting tools, including code coverage. This script **must** not apply any changes to the code. It may be necessary to run the build process as part of this script. While parallel execution is preferred, it's expected and accepted that most repositories will need to run the checks sequentially in a specific order.

### Build scripts

- `build:pre`: run any necessary pre-build steps. This script is optional, but may be necessary for some projects. Cleanup via `rimraf` is a very common task for this script.
- `build:tsc`: (Only required for typescript projects): run the TypeScript compiler to generate output files. Any project using typescript **must** have this script.
- `build`: run the full build process. This script must be implemented as a `npm-run-all` script that runs the `build:`-prefixed scripts in the correct order. Each stage of the build process must be defined on its own separate script.
- `prepublishOnly`: run the checks and build process before publishing the package. This script should be used to ensure that the package is ready to be published. It should run the `checks:pedantic` script and the `build` script. It may also run `yarn`'s `version apply` if that utility is being used to manage the package's versioning.

### Scripts examples

```json
"scripts": {
    "noop": "true",
    "lint": "eslint  -ext js,ts,jsx,tsx .",
    "lint:fix": "eslint --ext js,ts,jsx,tsx --fix .",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,json5,css,scss,html,md}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,js,jsx,json,json5,css,scss,html,md}\"",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "skott:web": "skott -nit --displayMode=webapp --trackThirdPartyDependencies --trackBuiltinDependencies src/",
    "skott:circular": "skott -nit --showCircularDependencies --displayMode=raw",
    "checks:quick": "npm-run-all --pc lint test",
    "checks:standard": "npm-run-all -sc lint format tsc test skott:circular",
    "checks:pedantic": "npm-run-all -sc lint format:check build test:coverage skott:circular",
    "checks:full": "npm-run-all -sc lint:fix format build test:coverage skott:circular",
    "build:pre": "rimraf dist",
    "build:main": "tsc",
    "build": "npm-run-all -s build:pre build:main",
    "prepublishOnly": "yarn run checks:pedantic && yarn build && yarn version apply",
    "prepare": "build"
}
```
