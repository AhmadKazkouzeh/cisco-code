module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  setupFilesAfterEnv: ["./setupTests.js"],
  testEnvironment: "node",
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
};
