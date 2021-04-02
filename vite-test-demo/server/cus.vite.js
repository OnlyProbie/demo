// 写一个node服务器，相当于devServer
const Connect = require('connect')
const http = require('http')

const app = Connect()

const fs = require('fs')
const path = require('path')

// 返回用户首页
app.use('/', (req, res, next) => {
  const { url } = req;
  // console.log(res)
  console.log(1111, url)
  if (url === '/') {
    // 首页
    const filePath = path.resolve(__dirname, 'index.html')
    console.log(2222, filePath)
    const body = fs.readFileSync(filePath, 'utf8')
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    res.end(body)
  } else if (url.endsWith('.ts')) {
    // 响应js请求
    const p = path.join(__dirname, url)
    const file = rewriteImport(fs.readFileSync(p, 'utf8'))
    res.setHeader('Content-Type', 'application/javascript')
    res.statusCode = 200
    res.end(file)
  } else if (url.startsWith('/@modules/')) {
    console.log(url)
    // 获取 @modules 后面的模块名称
    const moduleName = url.replace('/@modules/', '')
    const prefix = path.join(__dirname, '../node_modules', moduleName)
    // 要加载文件的地址
    const module = require(prefix + '/package.json').module
    const filePath = path.join(prefix, module)
    const file = fs.readFileSync(filePath, 'utf8')
    res.setHeader('Content-Type', 'application/javascript')
    res.statusCode = 200
    res.end(file)
  }
})

// 重写导入，变成相对路径
function rewriteImport(content) {
  return content.replace(/ from ['"](.*)['"]/g, function (s0, s1) {
    // s0 是匹配字符串 s1 是分组内容
    // 看看是不是相对地址
    if (s1.startsWith('./') || s1.startsWith('/') || s1.startsWith('../')) {
      // 不处理
      return s0
    } else {
      // 裸模块
      return `from '/@modules/${s1}'`
    }
  })
}


// 端口
http.createServer(app).listen(3003)