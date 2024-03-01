const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFiles: [
    // add your setup files..
  ],
  setupFilesAfterEnv: [
    './jest.setup.ts',
  ],
  moduleNameMapper: {
    '@/(.*)': './src/$1',
    '\\.(css|less)$': './__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    'node_modules',
    '.*/public',
    '.next/',
  ],
  moduleDirectories: ['node_modules', '.'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = async () => ({
  ...await createJestConfig(customJestConfig)(),
  transformIgnorePatterns: [
    // add your transform ignore patterns..
  ],
});
