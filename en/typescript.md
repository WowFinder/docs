# General TypeScript configuration

All TypeScript modules in the WowFinder project should use one of the [Centralized Recommendations for TSConfig bases](https://github.com/tsconfig/bases). The `Recommended` base should be suitable for a majority of cases. On top of that, some properties may be necessary to ensure proper interoperability accross modules:

- `compilerOptions.outDir`: all build settings documented here asume that the output directory is set to `./dist`.
- `compilerOptions.baseUrl`: must **not** be set for any library module. For application modules, it may be set if necessary for the module's build process; but our default build scripts expect this to be unset.
- `compilerOptions.paths`: must **not** be set for any library module. For application modules, it may be set if necessary for the module's build process; but our default build scripts expect this to be unset.
- `compilerOptions.jsx`: set to `"react-jsx"` for any module using React's JSX syntax. This will work for both `.jsx` and `.tsx` files.
- `include`: when using the default project structure, it should include the values `["src/**/*", "src/.setup.ts"]`. Note that the setup script is not caught by the glob pattern, and must be included explicitly.
- `exclude`: will typically include `"**/__tests__"` (for modules using Jest). Any other exclusing should be well documented in the corresponding module.

## Jest-specific configuration

Because tests files are usualy excluded from the main configuration, a separate configuration file is necessary for Jest. This file should be named `tsconfig.tests.json`, should extend the main configuration file, and should include the following properties:

- `include`: should include `"jest.setup.ts"` (when it exists) and `"**/*.test.ts*"` (for test files).
- `compilerOptions.types`: should include `"jest"`.
- `compilerOptions.noEmit`: should be set to `true`.

## Example files

An example file for the main configuration can be found at [configs/typescript/tsconfig.json](../configs/typescript/tsconfig.json). An example file for the Jest configuration can be found at [configs/typescript/tsconfig.tests.json](../configs/typescript/tsconfig.tests.json).