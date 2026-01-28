module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@hooks': './src/hooks',
            '@config': './src/config',
            '@services': './src/services',
            '@utils': './src/utils',
            '@types': './src/types',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
