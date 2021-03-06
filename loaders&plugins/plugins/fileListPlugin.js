class FileListPlugin {
  constructor(filename = 'filelist.txt') {
    this.filename = filename
  }
  apply (compiler) {
    // 在这里注册事件
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      const assets = compilation.getAssets()
      const source = {}
      var resultStr = ''
      var fileList = []
      assets.forEach(element => {
        fileList.push(`【${element.name}】
大小：${element.source.size()/1000}KB`)
      });
      resultStr = fileList.join('\n\n')
      source.source = () => resultStr
      source.size = () => resultStr.length
      compilation.emitAsset(this.filename, source, {})
    })
  }
}

module.exports = FileListPlugin