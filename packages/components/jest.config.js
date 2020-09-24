// jest.config.js
const base = require('../../jest.config');

module.exports = {
  ...base,
  moduleNameMapper: {
    '/^@abacus/([^/]*)$/': ['../../apps/$1', '../../packages/$1'],
    '/^@abacus/([^/]*)(.*)$/': ['../../apps/$1/src/$2', '../../packages/$1/src/$2'],
  },
  setupFiles: ['../../setupTests.ts'],
};
