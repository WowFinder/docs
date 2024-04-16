module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['src/**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ['/node_modules/', '__tests__', '__mocks__', 'src/stories'],

    // A preset that is used as a base for Jest's configuration
    preset: 'ts-jest',


    // A list of paths to directories that Jest should use to search for files in
    roots: ['./src'],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['./jest.setup.ts'],

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The glob patterns Jest uses to detect test files
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
