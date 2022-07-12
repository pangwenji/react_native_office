module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/components': './src/components',
          '@/assets': './src/assets',
          '@/store': './src/store',
          '@/routes': './src/routes',
        },
      },
    ],
  ],
};
