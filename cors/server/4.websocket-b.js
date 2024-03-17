// 导入 'ws' 模块
const WebSocket = require('ws');
// 创建一个新的 WebSocket 服务器，监听 4000 端口
const server = new WebSocket.Server({ port: 4000 });
// 当有新的客户端连接时，为这个客户端添加消息监听器
server.on('connection', ws => {
  // 当从客户端收到消息时
  ws.on('message', message => {
    // 在控制台打印收到的消息
    console.log('Received: ' + message);
    // 向客户端发送 'world' 消息
    ws.send('world');
  });
});
// 在控制台输出 WebSocket 服务器启动的信息
console.log('WebSocket server is running on http://localhost:4000');