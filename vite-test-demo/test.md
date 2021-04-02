


createServer:

- resolveConfig 加载配置

  - 默认 configEnv mode=development command='serve'
  - 先加载package.json 判断是不是Mjs
  - 加载vite.config.js
  - 拿到用户配置
  - mergeConfig
  - mode
  - 加载plugins --- 作区分 pre normal  post
  - 加载 root 目录
  - 加载 base url
  - 解析优化器缓存目录
     --- node_modules/.vite

- resolvePlugins 加载插件
  确定插件的执行顺序
  configResolved hooks

- resolveHttpServer

- createWebSocketServer

- 通过chokidar.watch对文件进行监听

- createPluginContainer 创建插件容器

createDevHtmlTransformFn 加载和index.html 有关的hooks
