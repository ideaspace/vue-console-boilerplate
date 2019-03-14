const path = require('path')
const globby = require('globby')
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0",
      "date-fns": "^1.30.1",
      "element-ui": "^2.5.4",
      "js-cookie": "^2.2.0",
      "lodash": "^4.17.11",
      "vue": "^2.5.22",
      "vue-class-component": "^6.0.0",
      "vue-property-decorator": "^7.0.0",
      "vue-router": "^3.0.1",
      "vuex": "^3.0.1",
      "vuex-class": "^0.3.1"
    },
    devDependencies: {
      "@types/js-cookie": "^2.2.1",
      "@types/lodash": "^4.14.121",
      "@vue/cli-plugin-babel": "^3.0.0",
      "@vue/cli-plugin-typescript": "^3.0.0",
      "@vue/cli-service": "^3.0.0",
      "babel-plugin-component": "^1.1.1",
      "cookie-parser": "^1.4.4",
      "hygen": "^2.1.2",
      "jsonwebtoken": "^8.5.0",
      "node-sass": "^4.9.0",
      "sass-loader": "^7.1.0",
      "svg-sprite-loader": "^4.1.3",
      "typescript": "^3.0.0",
      "vue-template-compiler": "^2.5.21"
    },
  })

  if (options.choiceComp && options.choiceComp.length) {
    options.choiceComp.forEach(comp => {
      const _files = globby.sync(['**/*'], {
        cwd: path.join(__dirname, `./skeleton/comps/${comp}`)
      });
      if (_files.length) {
        for (const rowPath of _files) {
          api.render({
            [`./src/components/${comp}/${rowPath}`]: `./skeleton/comps/${comp}/${rowPath}`
          })
        }
      }
    })
  }

  api.render('./skeleton/default', {
    ...options,
  })

  api.render({
    './src/app.config.ts': './skeleton/config/app.js'
  })

  api.onCreateComplete(() => {})
}
