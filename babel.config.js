module.exports = function (api) {
  const presets = [
    [
      '@babel/preset-env', {
        "targets": {
          "node": "current"
        }
      }
    ],
    ['@babel/preset-react']
  ];
  const plugins = [];

  api.cache(true);

  return {
    presets,
    plugins
  };
};