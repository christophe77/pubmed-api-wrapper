module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  coverageReporters: [
    "json-summary", 
    "text",
    "lcov"
  ]
};
