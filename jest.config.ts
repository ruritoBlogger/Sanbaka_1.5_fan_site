import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: [
    '<rootDir>/src',
  ],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '^.+\\.scss$': '<rootDir>/node_modules/jest-css-modules',
  },
};

export default config;
