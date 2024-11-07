import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.listen(6500, () => {
  console.log("Server has started");
});
