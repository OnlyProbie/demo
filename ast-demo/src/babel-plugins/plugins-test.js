export default function ({ types: t }) {
  return {
    visitor: { // 插件的访问者
      BinaryExpression(path, state) {
        // console.log(t.isIdentifier(path.node.operator))
        console.log(state.opts)
        if (path.node.operator !== '===') {
          return;
        }
        path.node.left = t.identifier('sebmck')
        path.node.right = t.identifier('dork')
      },
      StringLiteral(path) {
        throw path.buildCodeFrameError("Error message here");
      }
    }
  }
}