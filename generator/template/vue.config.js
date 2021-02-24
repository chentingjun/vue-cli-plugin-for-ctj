let publicPath = process.env.VUE_APP_BASEURL
let outputDir = 'dist'
if (process.env.NODE_ENV === 'production') {
  // publicPath = 'https://生产DNS地址/打包名/文件地址'
  outputDir = 'dist/pro'
}
if (process.env.NODE_ENV === 'sit') {
  outputDir = 'dist/sit'
}

module.exports = {
  publicPath,
  outputDir,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool = 'none'
    }
  }
}
