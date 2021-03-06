const path = require('path')
const fs = require('fs')
let join = path.join
/**
 * 遍历文件夹下的所有文件，返回文件路径
 *
 * @param {} startPath 文件夹名称
 */
function findSync(startPath) {
  let result = new Set();
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.add(fPath);
    });
  }
  finder(startPath);
  return result;
}

class SelectAllUnUseFilePath {
  constructor (options) {
    this.entry = options.entry
    this.exclude = options.exclude
    this.filePathList = findSync(this.entry)
    this.filePathList = [...this.filePathList].filter( filePathItem => {
      if(Array.isArray(this.exclude)) {
        return this.exclude.every( excludeItem => {
          return !filePathItem.startsWith(excludeItem)
        })
      } else {
        return !filePathItem.startsWith(this.exclude)
      }
    })
    this.filePathList = new Set(this.filePathList)
  }
  apply (compiler) {
    compiler.hooks.compilation.tap('SelectAllUnUseFilePath', compilation => {
      compilation.hooks.buildModule.tap('SelectAllUnUseFilePath', module => {
        let filePath = module.resource.split('?')[0]
        this.filePathList.has(filePath) && this.filePathList.delete(filePath)
      })
    });
    compiler.hooks.done.tap('SelectAllUnUseFilePath', () => {
      // 将对比出来无用的文件路径输出到 json 文件中，确认完毕可删除
      fs.writeFile('unUseFile.json', JSON.stringify([...this.filePathList], null, 2), (err) => {
        if(err) throw error('文件写入失败！')
      })
      // 删除文件，如果不确定对比得出的文件是否有用，可以注释掉
      // this.filePathList.forEach(fs.unlinkSync)
    })
  }
}

module.exports = SelectAllUnUseFilePath
