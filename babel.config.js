module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          images: './src/images',
          components: './src/components',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
