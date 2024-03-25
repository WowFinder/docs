# Versioning strategy for the WowFinder project

This project and its repositories mainly follow the [Semantic Versioning 2.0.0](https://semver.org/) specification. This document describes additional guidelines regarding aspects that are not fully defined by SemVer.

## Initial development versions

SemVer assumes that any version in the `0.y.z` range is unstable and may change at any time. While this is inherently true at such an early stage, the WowFinder project adds additional constraints focused on _intent_ for versions within this range.

### Volatile development: 0.0.z

Versions in the `0.0.z` range are considered volatile and may change at any time. At this range, assume any version may introduce breaking changes. As a matter of fact, there have been entire APIs that have been redesigned at this stage.

### Semi-stable development: 0.y.z (y > 0)

Bumping the minor portion of the version number (`y`) denotes _intention of stability_. This bump means that, from the author's perspective, the API should be reasonably close to its intended form. It may still break accidentally, but changes should be more predictable.

At this stage, assume that minor version increases may introduce breaking changes, but patch versions are _intended_ to be non-breaking.

## Criteria for 1.x

The criteria to bump into the first major version of a module is slightly different for library and end-user (application) modules, but follows a similar philosophy.

For any module, at some point during the early development, a _baseline feature target_ should be defined. A module reaching 1.x versions should achieve that target in addition to all the criteria for stability. On top of that, several guidelines must be met to ensure proper levels of reliability and stability are met, as described here.

### Sonar Quality Gate

Any module reaching 1.x must be configured for SonarCloud analysis and have a Quality Gate at least as strict as whatever is considered baseline for the whole project. In addition, it must have branch-protection enabled for the `main` branch.

Even within these restrictions, sub-par code may get eventually merged. Under no circumstances any release from the `1.x` should be tagged and/or published without a passing Quality Gate check.

At the moment of publishing this document, the baseline Quality Gate for the project is SonarCloud's default, which can be summarized as follows:

- At least 80% test coverage on new code (for PRs) or overal code (on `main` branch at the time of release).
- Reliability rating A. For PRs, this means no new bugs are knowingly introduced. Note that there may exist bugs or issues beyond what automated analysis can detect.
- Security rating A. For PRs, this means no new security vulnerabilities are knowingly introduced, and any security hotspots are consciously reviewed.
- Maintainability rating A. For PRs, this limits the number of code smells or other small issues allowed. This could allow technical debt and code smells to build up over time, which is an important reason to verify the Quality Gate on the `main` branch before any release. If a "tipping point" is reached, causing the Quality Gate to fail, effort in that project should immediately focus on addressing code quality before any release can be made.
- Strict limits on duplication: SonarCloud's default is less than or equal 3% duplication on new code for PRs, and less than or equal 3% duplication on overall code for the `main` branch.

### Clean lint

Any module reaching 1.x must have a functional linting setup. In the near future, global rules for all applicable projects will be published here.

Any tagged release must pass the linting rules with no errors and minimal warnings. More explicit guidelines on the warnings limit will be published before any module reaches this stage.

### Baseline documentation

The purpose of the module and the reasoning for any technology choices must be documented before the first stable release. This is to ensure that the module has a clear purpose and technology stack before it can be regarded as "stable".

As a baseline, there are several global choices for technologies used accross the project. Repositories adhering to these choices don't need to provide further documentation about them (the reasoning for this choices will be published here in the near future).

### Global technology choices

- TypeScript: The first choice of language for all modules in the project should be TypeScript. There are some experimental projects using plain JS, but those shouldn't reach stable versioning in such form anyway.
- Jest: The first choice of testing framework for all modules in the project should be Jest.
- Runtimes: for backend and core modules, the first choice of runtime should be the latest LTS version of Node.js. Frontend modules should base their choice of APIs based on the expected runtime environment.
- Frameworks: several frameworks and utilities are used accross the project. These should be the first choice for some common scenarios:
  - Electron for desktop applications.
  - Apache Cordova for mobile applications.
  - Strict adherence to web standards and modern best practices for web applications.
  - React 18 for any frontend. Functional components (and hooks) are preferred over class-based components; and the code should rely on TS's type system for component prop validation.
  - Backend: currently, there is no strict choice of framework for backend modules beyond the runtime.
  - JSON and JSON5 as the primary data storage and transport formats. Compression at the protocol level is perfectly acceptable, and explicit compression management can be used when protocol-level compression is not available or not enough, but the justification must be clearly documented. JSON5 is preferred for any human-managed data, but plain JSON is perfectly fine for data transport between modules (ie: between a frontend and a backend module).
  - GraphQL will be the primary choice to define network contracts.
