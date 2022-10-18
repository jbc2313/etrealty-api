import type { Config } from "@jest/types"

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
     displayName: {
     name: "et_api_tests",
     color: "greenBright",
   },
   verbose: true,
   reporters: ['default'],
//   setupFiles: ["dotenv/config"],
   testMatch: ["**/**/*.test.ts"],
   testEnvironment: "node",
   detectOpenHandles: true,
   transform: { "^.+\\.tsx?$": "ts-jest" },
  // globalTeardown: "<rootDir>/src/tests/jest-globals-teardown.ts",
   forceExit: true,
 };
}; 

