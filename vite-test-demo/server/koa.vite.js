// 写一个node服务器，相当于devServer
const Koa = require('koa')
const app = new Koa()

const fs = require('fs')
const path = require('path')
// 处理SFC
const compilerSFC = require('@vue/compiler-sfc')
// 处理模板
const compilerDOM = require('@vue/compiler-dom')

// console.log('compilerDOM =====', compilerDOM)

// 返回用户首页
app.use(async (ctx) => {
  const { url, query } = ctx.request;
  // console.log(url)
  if (url === '/') {
    // 首页
    const filePath = path.resolve(__dirname, 'index.html')
    // console.log(filePath)
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync(filePath, 'utf8')
  } else if (url.endsWith('.ts')) {
    // 响应js请求
    const p = path.join(__dirname, url)
    ctx.type = 'text/javascript'
    // const file = rewriteImport(fs.readFileSync(p, 'utf8'))
    const file = fs.readFileSync(p, 'utf8')
    ctx.body = file
  } else if (url.startsWith('/@modules/')) {
    // 获取 @modules 后面的模块名称
    const moduleName = url.replace('/@modules/', '')
    const moduleRootPath = path.join(__dirname, '../node_modules', moduleName)
    // 要加载文件的地址
    const modulePath = require(moduleRootPath + '/package.json').module
    const filePath = path.join(moduleRootPath, modulePath)
    const res = fs.readFileSync(filePath, 'utf8')
    ctx.type = 'text/javascript'
    ctx.body = rewriteImport(res)
  } else if (url.indexOf('.vue') > -1) {
    // 读取vue文件内容
    const p = path.join(__dirname, url.split('?')[0])
    // compilerSFC 解析 SFC，获得一个ast
    const ret = compilerSFC.parse(fs.readFileSync(p, 'utf8'))
    // console.log(ret)
    // 没有query.type，说明是SFC
    if (!query.type) {
      // 处理内部script
      // 获取脚本内容
      const scriptContent = ret.descriptor.script.content;
      // 将默认导出配置对象转换为变量
      const script = scriptContent.replace('export default ', 'const __script = ')
      ctx.type = 'text/javascript'
      ctx.body = `
${rewriteImport(script)}
// template 的解析转换为另一个请求单独做
import { render as __render } from '${url}?type=template'
__script.render = __render
export default __script
`
    } else if (query.type === 'template') {
      console.log('template ======', query)
      const tpl = ret.descriptor.template.content;
      // 编译为包含render函数的模块
      const renderModule = compilerDOM.compile(tpl, {mode: 'module'}).code
      ctx.type = 'text/javascript'
      ctx.body = rewriteImport(renderModule)
    }
    // else if (url.endsWith('.png')) {
    //   ctx.body = fs.readFileSync('src' + url)
    // }
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