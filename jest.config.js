module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/index.ts', '!<rootDir>/src/server.ts'],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'js'],
    roots: ['<rootDir>/src/'],
    rootDir: './',
    setupFiles: ['dotenv/config'],
    testEnvironment: 'node',
    testMatch: ['**/*.(spec|test).ts'],
    verbose: true,
    moduleNameMapper: {
        '^@routes(.*)$': '<rootDir>/src/routes$1',
    },
    transform: {
        '^.+\\.ts$': 'ts-jest'
    }
};
