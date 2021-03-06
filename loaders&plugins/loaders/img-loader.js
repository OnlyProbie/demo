const loaderUtil = require('loader-utils')
const mime = require('mime');

function imgLoader (buffer) {
  const { limit = 1024, filename= '[contenthash:5].[ext]' } = loaderUtil.getOptions(this)
  var content = ''
  if(buffer.byteLength > limit) {
    content = getFilePath.call(this, buffer, filename)
  } else { // base64处理
    const mimeType = mime.getType(this.resourcePath)
    content = `data:${mimeType};base64,${buffer.toString('base64')}`
  }
  return `module.exports = \` ${content} \``;
}

module.exports = imgLoader

imgLoader.raw = true // 该loader要处理的是原始数据

// 图片
function getFilePath(buffer, name) {
  var filename = loaderUtil.interpolateName(this, name, {
    content: buffer
  })
  this.emitFile(filename, buffer)
  return filename
}