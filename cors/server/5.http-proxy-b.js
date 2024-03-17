const express = require("express");
const app = express();
const users = [{ id: 1, name: "张三" }];
app.get("/users", (req, res) => {
  res.json(users);
});
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
