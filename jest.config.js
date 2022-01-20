/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  setupFiles: ['./jest-setup.js'],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  preset: 'react-native',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  moduleNameMapper: {
    "~(.*)": "<rootDir>/src/$1"
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)'
  ],
};