const fs = require('fs')
const PATH = './generator/templates/default/src/assets/theme'
function rename() {
  fs.readdir(PATH, (err, oldName) => {
    if (err) {
      console.log(err)
    }
    oldName.forEach(name => {
      fs.rename(`${PATH}/${name}`, `${PATH}/${name.replace(/\_+/, '__')}`, function (err) {
        if (err) throw err;
        console.log('Rename complete!');
      })
    })
  })
}

rename()

module.exports = ()
