module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|react-clone-referenced-element|@react-navigation/.*))',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
}
