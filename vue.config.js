// 线上环境
// module.exports = {
// 	baseUrl: '/assets/',
// 	outputDir: 'dist',
// 	assetsDir: 'happyidiom/',
// 	devServer: {
// 		port:8989,

// 	}
// }
// 开发环境
module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  assetsDir: '',
  devServer: {
    port:8787,
    proxy: {
      '/api': {
        target: "http://192.168.0.179:8080",
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  },
}