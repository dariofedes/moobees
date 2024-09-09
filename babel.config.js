module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@react-native/babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './assets',
          '@shared': './src/shared',
          '@src': './src',
        },
      },
    ],
  ],
};
