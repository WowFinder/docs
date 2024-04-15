# General ESLint rules (TypeScript)

This document describes the bulk of ESLint rules used accross TypeScript code in the WowFinder project, and the motivation behind them.

A sample configuration file can be found at [`/configs/eslint-8/.eslintrc.js`](../configs/eslint-8/.eslintrc.js) and [`/configs/eslint-8/.eslintrc-stricter.js`](../configs/eslint-8/.eslintrc-stricter.js). The second file is used to enable a second pass of `eslint` with strict errors on rules that the main configuration only provides warnings, even if with different options (for example, to be able to warn about file length at 150 lines of code, but only flag as an error at 200 lines). In addition, a sample ignore file can be found at [`/configs/eslint-8/.eslintignore`](../configs/eslint-8/.eslintignore).

## Quotes

Single quotes are preferred overall in JS and TS code, and formatters should be configured to automatically convert them. (Although double quotes are required in `JSON`, using `JSON5` and single quotes should be preferred whenever possible.)

Note that `avoidEscape` needs to be enabled to prevent conflicts with `prettier` (it enforces avoiding escapes over quote consistency and doesn't allow disabling that rule).

```js
quotes: [
    'error',
    'single',
    {
        avoidEscape: true,
    },
],
```

## Semicolons

Semicolons must be enforced through the codebase. Because of automatic semicolon insertion, it is impossible to identify when a missing semicolon is intentional or a mistake. In addition to enforcement via ESLint, formatters and transpilers should be configured to automatically include semicolons (so there is an actual semicolon anywhere where the browser or runtime could have added it anyway).

Beyond this, and to make intent more explicit, it is recomended that code lines should only end with semicolons, binary operators, or any kind of opening delimiter (parentheses, brackets, braces, etc). This can't be always applied, so it is not being enforced; and there are some scenarios where it would harm readability (ex: multi-line ternary expressions).

```js
semi: 'off',
'@typescript-eslint/semi': ['error'],
```

## Explicit typing

Most code elements should be explicitly typed, with a strong emphasis on method arguments and return types. Notable exceptions are constant expressions (when tagged with `as const` or with a `satisfies` type guard) and inline arrow functions. When using react components, explicit types make innecessary (and even counterproductive) to use `propTypes`.

Explicit usage of `any` is discouraged but allowed (should be kept only for interoperability with third-party code and for rapidly iterating experiments). `unknown` and generics are preferred whenever possible. Implicit `any` must not be used accross the project. This last rule can be relaxed when migrating pre-existing JS code to TS, but only for as long as strictly necessary to add proper typing to the migrated code.

```js
'react/prop-types': 'off',
'@typescript-eslint/explicit-function-return-type': [
    'error',
    {
        allowExpressions: true,
    },
],
'@typescript-eslint/no-explicit-any': 'off',
'@typescript-eslint/explicit-module-boundary-types': [
    'error',
    {
        allowArgumentsExplicitlyTypedAsAny: true,
    },
],
'no-use-before-define': 'off',
'@typescript-eslint/no-use-before-define': [
    'error',
    {
        ignoreTypeReferences: true,
    },
],
```

## Maintainability and reliability rules

The project's code conventions sets some additional rules to asist with maintainability and reliability. Here is a summary of such rules:

- File length: code files shouldn't be too long. The hard limit (error) is set at 200 lines, and the warning threshold is at 150 lines. Test files are allowed to be longer (hard limit at 500 lines and warning threshold at 200), as they often need to include lots of repetitive, verbose validations. All these measures ignore comments and blank lines.
- Code complexity: a hard limit is set at a complexity score of 15, with warnings at 10. Test files are allowed the same hard limit, but will trigger warnings at a complexity of 5: while it is ok for these files to be verbose and redundant (thus longer), they shouldn't add substantial complexity to a project.
- Deprecation alerts: usage of deprecated code elements is set up to trigger warnings. There are too many scenarios when this may be justified (even if temporarily), but an active effort needs to be made to keep these warnings to a minimum.
- Test coverage exemptions: `istanbul` annotations to skip coverage over entire files is strictly disallowed, and skipping over discrete code elements always needs to be justified. Note that even if a project overrides the restriction on file-level anotations, those are not honored by the Sonar Quality Gates, and will cause the uncovered code to count against the global coverage percentage (possibly causing the Quality Gate to fail).

```js
// Main configuration file:
rules: {
    // ...
    'istanbul/no-ignore-file': 'error',
    'istanbul/prefer-ignore-reason': 'error',
    'deprecation/deprecation': 'warn',
    'max-lines': [
        'warn',
        {
            max: 150,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    complexity: ['warn', 10],
    'misc/no-shadow': 'warn',
    'misc/sort-construct-signature': 'error',
},
overrides: [
    {
        files: ['*.test.ts*', '*.test.tsx'],
        rules: {
            '@typescript-eslint/no-empty-function': 'off',
            'max-lines': [
                'warn',
                {
                    max: 300,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            complexity: ['warn', 5],
        },
    },
],

// Secondary (stricter) configuration file:
rules: {
    // ...
    'max-lines': [
        'error',
        {
            max: 200,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    complexity: ['error', 15],
},
overrides: [
    {
        files: ['*.test.ts*', '*.test.tsx'],
        rules: {
            'max-lines': [
                'error',
                {
                    max: 500,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ]
        },
    },
],
```