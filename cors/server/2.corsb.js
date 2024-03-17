const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(express.static("../public"));
app.use(cookieParser());
app.use(express.json()); // 使用中间件来解析请求体中的 JSON 数据
app.use(express.urlencoded({ extended: false })); // // 使用中间件来解析请求体中的 urlencoded 数据

// 使用中间件来设置响应头，以处理跨域问题
app.use((req, res, next) => {
  // 允许所有来源的访问
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  // 允许接受的请求头
  res.header("Access-Control-Allow-Headers", "Accept,Content-Type");
  // 指定对外暴露的响应头
  res.header("Access-Control-Expose-Headers", "X-My-Custom-Header");
  // 设置自定义的响应头
  res.setHeader("X-My-Custom-Header", "X-My-Custom-Header");
  // 允许发送 Cookie
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "3600");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  // 调用 next 函数，以便将控制权交给下一个中间件
  next();
});
// 定义一个用户列表
const users = [{ id: 1, name: "用户1" }];
// 创建一个端点，返回用户列表
app.get("/users", (req, res) => {
  // 将用户列表以 JSON 格式返回
  res.json(users);
});
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users[users.length - 1].id + 1;
  users.push(user);
  res.json(users);
});

app.get("/count", (req, res) => {
  let count = req.cookies.count || 0;
  count++;
  // 在响应的 Cookies 中设置 "count" 的值，同时设置最大过期时间为 24 小时，并设置只能通过 HTTP 访问
  res.cookie("count", count, { maxAge: 24 * 60 * 60 * 1000 });
  res.json({ count });
});

// 定义监听端口
const port = 4000;
// 让应用监听在指定端口并在控制台输出信息
app.listen(port, () => {
  // 当服务器开始运行时，打印一条消息
  console.log(`Server is running on http://localhost:${port}`);
});
