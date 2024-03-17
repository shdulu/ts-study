const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(express.static("public"));
// 使用 express 应用的 use 方法添加一个中间件
app.use(
  // 当请求的路径以 '/api' 开头时，这个中间件将会处理该请求
  "/api",
  // 使用 http-proxy-middleware 创建一个代理中间件
  createProxyMiddleware({
    // 代理的目标服务器地址
    target: "http://localhost:4000",
    // 设置 changeOrigin 为 true，代理服务器会在请求转发时修改请求头中的 host 为目标服务器的 host
    changeOrigin: true,
    // 使用 pathRewrite 重写请求路径。这里的配置会将路径中的 '^/api' 替换为 ''
    pathRewrite: {
      "^/api": "",
    },
  })
);

app.listen(3000, () => {
  console.log("Proxy server is running on port 3000");
});
