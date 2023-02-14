const express = require("express");
const bp = require("body-parser");
const { readdirSync } = require("fs");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  const listImg = readdirSync("./public/images").map((name) => name);
  res.render("pages/posts", { listImg: JSON.stringify(listImg) });
});

app.listen(PORT, function () {
  console.log("Server is running at port " + PORT);
});
