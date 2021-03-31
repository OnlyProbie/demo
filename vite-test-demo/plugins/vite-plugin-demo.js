export default function (options) {
  return {
    name: 'vite-plugin-test-demo',
    resolveId (source) {
      console.log('source: ', source)
      // 是否处理当前的请求
      if (source === 'virtual-module') {
        return source // 接管模块
      }
      return null
    },
    load (id) {
      console.log(id)
      if (id === 'virtual-module') {
        // 返回模块加载的代码
        return 'export default "hello vite!"'
      }
      // return null
    },
    transform () {}
  }
}