const testPlugin = require('./babel-plugins/plugins-test')
const babel = require('babel-core')
const types = require('babel-types')

const code = `foo === bar`

const testplugins = testPlugin.default({types})

let d = babel.transform(code, {
  plugins:[
    // ArrowPlugins,
    // ClassPlugins,
    [testplugins, {
      "options1": true,
      "options2": {a:false}
    }]
  ]
})

// console.log(d.code)

// console.log(d)

