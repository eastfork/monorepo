// jest.config.js
module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'json', 'text'],
  collectCoverageFrom: ['**/src/**/*.ts', '**/src/**/*.tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleNameMapper: {
    '/^@abacus/([^/]*)$/': ['apps/$1', 'packages/$1'],
    '/^@abacus/([^/]*)(.*)$/': ['apps/$1/src/$2', 'packages/$1/src/$2'],
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['.', 'src', 'node_modules'],
};
