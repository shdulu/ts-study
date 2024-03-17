// 引入 Express 框架
const express = require("express");
// 创建一个 Express 应用
const app = express();
// 设置静态文件夹
app.use(express.static("../public"));
// 定义监听端口
const port = 3000;
// 让应用监听在指定端口并在控制台输出信息
app.listen(3000, () => {
  // 当服务器开始运行时，打印一条消息
  console.log(`Server is running on http://localhost:${port}`);
});
