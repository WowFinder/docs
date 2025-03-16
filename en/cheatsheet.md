# Useful CLI actions

## Build a test package

```bash
yarn build && cd dist && yarn && yarn pack && mv package.tgz ../ && cd ../ && ls -l package.tgz
```

1. `yarn build`: runs the module's build script(s) as configured in `package.json`.
2. `cd dist`: changes to the `dist` directory where the build artifacts were just created.
3. `yarn`: installs dependencies and ensures a clean lockfile is generated for the package.
4. `yarn pack`: does the actual packaging into a `.tgz` file (`package.tgz` by default).
5. `mv package.tgz ../`: moves the package to the root directory of the module (`dist` is susceptible to be automatically deleted by some scripts).
6. `cd ../`: returns to the root directory of the module.
7. `ls -l package.tgz`: lists the details of the generated file.

## Publish a package

⚠️ Manually check that the version number in `package.json` is correct before publishing.

```bash
yarn npm whoami && yarn build && cd dist && yarn && yarn npm publish --access public
```
1. `yarn npm whoami`: checks that the user is logged in to npm repository before proceeding.
2. `yarn build`: runs the module's build script(s) as configured in `package.json`.
3. `cd dist`: changes to the `dist` directory where the build artifacts were just created.
4. `yarn`: installs dependencies and ensures a clean lockfile is generated for the package.
5. `yarn npm publish --access public`: publishes the package to the npm registry with public access.