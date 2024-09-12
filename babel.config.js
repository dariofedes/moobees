module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@react-native/babel-preset',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
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
          '@styles': './styles',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
