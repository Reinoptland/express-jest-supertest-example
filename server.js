const express = require("express");
const userRoutes = require("./routers/users");

const app = express();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

module.exports = app;
