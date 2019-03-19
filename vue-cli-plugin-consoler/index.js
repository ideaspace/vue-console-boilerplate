module.exports = (api, projectOptions) => {
  api.chainWebpack(config => {
    config.resolve
      .extensions
      .prepend('.ts')
  })
}
