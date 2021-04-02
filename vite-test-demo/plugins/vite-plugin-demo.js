export default function (options) {
  return {
    name: 'vite-plugin-test-demo',
    resolveId (source) {
      // console.log('source: =====', source)
      // 是否处理当前的请求
      if (source === 'hello-vite') {
        return source // 接管模块
      }
      return null
    },
    load (id) {
      // console.log(id)
      // console.log('load: =====', id)
      if (id === 'hello-vite') {
        // 返回模块加载的代码
        return 'export default "hello vite!"'
      }
      return null
    },
    transform (code, id ) {
      // console.log('code ', code, '====  id: ',  id)
    }
  }
}