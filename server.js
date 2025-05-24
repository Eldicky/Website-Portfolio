const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const publicDirectory = path.join(__dirname, "public");

const app = express();
const port = 3000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectory);

app.use(connectLivereload());
app.use(express.static(publicDirectory));

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("pages/index", {
    pageTitle: "Home",
    path: "/",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
