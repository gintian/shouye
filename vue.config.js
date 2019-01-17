// 详细配置： https://cli.vuejs.org/config/#vue-config-js

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    // proxy: "http://192.168.230.218:9000/api"
  },
  productionSourceMap: false
}