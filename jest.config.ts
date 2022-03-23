export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: [
    "**/*.spec.ts"
  ],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/modules/**/useCases/**/*.ts"],
  coverageDirectory: 'coverage',
  coverageReports: ["text-sumary", "lcov"]
};
