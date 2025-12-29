const config = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "./*/*.js"
  ],
  coveragePathIgnorePatterns: [
    "./*/script.js",
  ],
  collectCoverage: false,
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  }
};
module.exports = config;