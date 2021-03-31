// 写一个node服务器，相当于devServer
const Koa = require('koa')
const app = new Koa()

const fs = require('fs')
const path = require('path')

// 返回用户首页
app.use(async ctx => {
  const { url } = ctx.request;
  console.log(url)
  if (url === '/') {
    // 首页
    const filePath = path.resolve(__dirname, 'index.html')
    console.log(filePath)
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync(filePath, 'utf8')
  } else if (url.endsWith('.ts')) {
    // 响应js请求
    const p = path.join(__dirname, url)
    ctx.type = 'text/javascript'
    const file = rewriteImport(fs.readFileSync(p, 'utf8'))
    ctx.body = file
  } else if (url.startsWith('/@modules/')) {
    // 获取 @modules 后面的模块名称
    const moduleName = url.replace('/@modules/', '')
    const prefix = path.join(__dirname, '../node_modules', moduleName)
    // 要加载文件的地址
    const module = require(prefix + '/package.json').module
    const filePath = path.join(prefix, module)
    const res = fs.readFileSync(filePath, 'utf8')
    ctx.type = 'text/javascript'
    ctx.body = rewriteImport(res)
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
app.listen(3003, () => {
  console.log('kvite start!')
})