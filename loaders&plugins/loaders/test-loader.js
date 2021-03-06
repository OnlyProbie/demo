// 通过 loader-utils 获取 loader 的 options
const { getOptions } = require('loader-utils')
module.exports = function (sourceCode) {
  console.log('test-loader 运行了')
  let options = getOptions(this)
  let result = ''
  console.log(options)
  if (options.changeVar) {
    let params = new RegExp(options.changeVar, 'g')
    result = sourceCode.replace(params, 'var')
  } else {
    result = sourceCode
  }

  return result
}