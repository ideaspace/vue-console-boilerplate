const fs = require('fs')
module.exports = api => {
  return {
    getMain() {
      const tsMode = api.resolve('src/main.ts')
      return fs.existsSync(tsMode)
    }
  }
}
