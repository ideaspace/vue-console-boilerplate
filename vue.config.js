const path = require('path')

module.exports = {
  configureWebpack: {
    name: require('./src/app.config.ts').title,
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve('src/assets/icons'))
      .end();

    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, '.', 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    public: '',
    overlay: {
      warnings: true,
      errors: true
    },
    before: require('./tests/mock-api')
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/theme/_variables.scss";@import "@/assets/theme/_mixin.scss";`
      }
    }
  }
}
