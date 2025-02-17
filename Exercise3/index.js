const http = require("http");
const { users } = require("./users");
const moment = require("moment");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This is the homepage",
  });
});

app.get("/about", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Response success",
    description: "Exercise #03",
    date: moment().format(),
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

app.use((req, res) => {
  res.status(404).json({
    status: "not found",
    message: "Route tidak ditemukan",
  });
});

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
