const chokidar = require('chokidar');
const fs = require('fs')
const path = require('path')
const WebSocket = require('ws')

const ws = new WebSocket.Server({port: 3008})

// One-liner for current directory

ws.on('connection', function connection(wss) {
  wss.on('message', function incoming(message) {
      console.log('received: %s', message);
  });
  chokidar.watch('hmr/src').on('change', (curPath) => {
    console.log(curPath);

    const filePath = path.resolve(__dirname, '../', curPath)
    const data = fs.readFileSync(filePath, 'utf8')
    console.log('data => ', data)
    wss.send(data)
  });
})