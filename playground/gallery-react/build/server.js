function serve(Webpack, WebpackDevServer, webpackConfig) {
  const compiler = Webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, webpackConfig.devServer);

  server.listen(webpackConfig.devServer.port, "127.0.0.1", function () {
    console.log("Starting sever");
  });
}

module.exports = {
  serve
};