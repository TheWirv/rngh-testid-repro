var cloneDeep = require('lodash/cloneDeep');
var rnPreset = cloneDeep(require('react-native/jest-preset'));
var tsjPreset = cloneDeep(require('ts-jest/presets').jsWithBabel);

delete rnPreset.transform['^.+\\.(js|ts|tsx)$'];

var setupFiles =
  tsjPreset.setupFiles !== undefined &&
  Array.isArray(tsjPreset.setupFiles) &&
  tsjPreset.setupFiles.length > 0
    ? rnPreset.setupFiles.concat(tsjPreset.setupFiles)
    : [...rnPreset.setupFiles];
setupFiles.push(
  '<rootDir>/jest-setup.js',
  'react-native-gesture-handler/jestSetup.js',
);

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
var config = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      isolatedModules: true,
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.tsx file, for example:
    'test-utils', // a utility folder
    'components', // components directory
    '__tests__', // tests directory
    __dirname, // the root directory
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  rootDir: process.cwd(),
  setupFiles,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testTimeout: 10000,
  transform: Object.assign(tsjPreset.transform, rnPreset.transform),
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?/*|react-navigation|@react-navigation/.*|react-native-safe-area-context)',
  ],
};

module.exports = Object.assign(rnPreset, Object.assign(tsjPreset, config));
