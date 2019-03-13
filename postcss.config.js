module.exports = ({
  file,
  options,
  env
}) => ({
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    cssnano: env === 'production' ? options.cssnano : false
  }
});