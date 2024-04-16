# Jest settings for TypeScript modules

These are the required jest settings to ensure good quality code for TypeScript modules in the WowFinder project. For some settings, a `strict` and a `lenient` variant are provided. The `lenient` variant is close to current industry standards, but those standards are influenced by the needs of many projects that must priorize a rapid delivery cadence over highest code quality. The `strict` variant is preferred for most of our modules, and pushes the quality standars much higher.

## Jest settings

- `clearMocks`: It's advisable to set this flag to `true`.
- `collectCoverage`: This should be set to `false` in the main configuration files, and overriden via CLI options. This allows quicker test runs during development, without sacrificing the ability to run coverage reports when needed. Note that other processes (such as `package.json`, GitHub Actions, and Sonar Quality Gates) enforce coverage runs most of the time.
- `collectCoverageFrom`: The setting provided in the reference files should be good for a vast majority of cases (includes both JS and TS, including explicit module extension and React JSX syntax): `['src/**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}']`.
- `coveragePathIgnorePatterns`: Some parts of the project will always need to be excluded from coverage reports. The values included by default in the reference files handle these cases, and should be sufficient for most projects (any addition should be carefully justified and documented):
    - `/node_modules/`: External modules should take care of their own testing and coverage.
    - `/__tests__/`: Test files should not be included in coverage reports. Covering test files would be utterly pointless, and likely to slow down development for absolutely no benefit.
    - `src/stories`: Storybook stories, when used properly, are a form of test files, so the same points apply.
    - `__mocks__`: While this is debateable, any test actually using the mocks should be enough coverage for those; and any mocks not being used in tests need no coverage.
- `coverageDirectory`: Although `coverage` is already Jest's default, it is set explicitly in the reference files since some scripts (mainly the SonarCloud integrations) rely on this.
- `coverageThreshold`: This is the main difference between `strict` and `lenient` settings. The `strict` settings enforce a 100% coverage for branches, functions, lines, and statements. The `lenient` settings fallback to Jest default's, which highlight low coverage values but don't cause the build to fail by themselves. Note that even under `strict` settings it is possible to deal with untestable elements with `/* istanbul ignore next */` comments: our `eslint` configurations require these to be explicitly documented; and also disable the dangerous `/* istanbul ignore file */` annotations.
- `preset`: Most projects should use `ts-jest` as their preset.
- `roots`: When using the recommended directory structures, this should be set to `['./src']`.
- `setupFilesAfterEnv`: this is set as `['./jest.setup.ts']` in the reference files. If no test environment setup is needed, an empty file should be added at that location to make intentionality explicit.
- `testMatch`: The default value provided in the reference files should be good for a vast majority of cases: `['**/?(*.)+(spec|test).[jt]s?(x)']`. Note that this pattern doesn't cover explicit module extensios (such as `.cjs`): test files should _not_ be modules.
- `testEnvironment`: The default `node` should be good for library modules, but frontend projects may need to set this to `jsdom`.

## Reference files

- [jest.config.strict.js](/configs/jest/jest.config.strict.js): the `strict` settings for Jest.
- [jest.config.lenient.js](/configs/jest/jest.config.lenient.js): the `lenient` settings for Jest.