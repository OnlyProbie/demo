// 解析js的语法的包
const esprima = require('esprima')
// 遍历树的包
const estraverse = require('estraverse')
// 生成新的树的包
const escodegen = require('escodegen')
// babel核心解析库
const babel = require('babel-core')
// babel类型转化库
const t = require('babel-types')

let code = `class Jomsou{
  constructor(name){
      this.name = name;
  }
  getName(){
      return this.name;
  }
}`

/**
 * 解析 -> 转换 -> 生成
 *
 * 解析阶段：词法分析(将字符串形式的代码转换为令牌tokens流) -> 语法分析(转换为AST)
 * 转换阶段：接收解析阶段生成的AST，对其遍历，进行节点的增删改等操作(插件)
 * 生成阶段：AST转换成字符串形式代码，创建源码映射(source maps)
 */

// 解析js语法
let tree = esprima.parseScript(code)

console.log(tree)
// 遍历tree
estraverse.traverse(tree, {
  // enter(node) {
  //   console.log('enter: ' + node.type)
  //   // if (node.type === 'Identifier') {
  //   //   node.name = 'Jartto'
  //   // }
  // },
  // leave(node) {
  //   console.log('leave: ' + node.type)
  // }
})

// 箭头函数 ES6 -> ES5
let ArrowPlugins = {
  // 访问者模式
  visitor: {
    // 捕获匹配的api
    ArrowFunctionExpression(path) {
      let { node } = path
      let body = node.body
      let params = node.params
      if(!t.isBlockStatement(body)) {
        let returnStatement = t.returnStatement(body)
        body = t.blockStatement([returnStatement])
      }
      let r = t.functionExpression(null, params, body, false, false)
      path.replaceWith(r)
    }
  }
}

// class 的转化

let ClassPlugins = {
  visitor: {
    ClassDeclaration(path) {
      let {node} = path
      let className = node.id.name
      className = t.identifier(className)
      let funs = t.functionDeclaration(className, [], t.blockStatement([]), false, false)
      path.replaceWith(funs)
    }
  }
}
// 将class的方法函数转化为原型方法
let ClassConstructorPlugins = {
  visitor: {
    ClassDeclaration(path) {
      console.log(path)
      let { node } = path
      let className = node.id.name
      className = t.identifier(className)
      let classList = node.body.body
      let funs = t.functionDeclaration(className, [], t.blockStatement([]), false, false)
      let es5func = []
      classList.forEach((item, index) => {
        let body = classList[index].body
        // 处理 构造方法
        if (item.kind === 'constructor') {
          let params = item.params.length ? item.params.map(item => item.name) : []
          params = t.identifier(params)
          funs = t.functionDeclaration(className, [params], body, false, false)
          path.replaceWith(funs)
        } else {
          let protoObj = t.memberExpression(className, t.identifier('prototype'))
          let left = t.memberExpression(protoObj, t.identifier(item.key.name))
          let right = t.functionExpression(null, [], body, false, false)
          let assign = t.assignmentExpression('=', left, right)
          es5func.push(assign)
        }
      });
      if (es5func.length === 0) {
        path.replaceWith(funs)
      } else {
        es5func.push(funs)
        path.replaceWithMultiple(es5func)
      }
    }
  }
}



// 转换
let d = babel.transform(code, {
  plugins:[
    // ArrowPlugins,
    // ClassPlugins,
    ClassConstructorPlugins
  ]
})

console.log(d.code)

// 生成新的tree
let r = escodegen.generate(tree)
console.log(r)
