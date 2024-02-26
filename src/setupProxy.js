const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/suggest',{
      target: 'http://suggestqueries.google.com/complete/search',
      changeOrigin: true,
    })
  );
};
