// 导入 Express.js 框架
const express = require("express");
// 创建一个 Express.js 应用实例
const app = express();
// 定义服务器要监听的端口号
const port = 3000;
// 为 '/sugrec' 路径设置一个 GET 请求的处理器
app.get("/sugrec", (req, res) => {
  // 从请求的查询参数中获取 'cb' 和 'wd' 参数
  const { cb, wd } = req.query;
  // 根据 'wd' 参数创建一个响应数据对象
  const result = {
    g: Array.from({ length: 10 }, (_, i) => ({ q: `${wd}${i + 1}` })),
  };
  // 设置响应的 Content-Type 为 'text/javascript'
  res.type("text/javascript");
  // 发送一个 JavaScript 脚本作为响应，该脚本调用 'cb' 参数指定的函数，并将响应数据作为参数传入
  res.send(`${cb}(${JSON.stringify(result)})`);
});
// 让应用开始监听指定的端口，以便接收到来的 HTTP 请求
app.listen(port, () => {
  // 当服务器开始监听后，输出一条消息到控制台
  console.log(`Server is running on http://localhost:${port}`);
});
