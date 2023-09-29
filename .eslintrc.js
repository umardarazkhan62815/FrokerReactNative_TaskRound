module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: [
        ['images', './src/images'],
        ['components', './src/components'],
      ],
    },
  },
};
