function build(Webpack, webpackConfig) {
  Webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
  });
}

module.exports = {
  build
};