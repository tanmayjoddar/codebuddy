module.exports = {
  roots: ["<rootDir>/server"],
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverageFrom: [
    "server/**/*.ts",
    "client/src/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/dist/**",
    "!**/coverage/**",
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
