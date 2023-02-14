const dotenv = require("dotenv");
dotenv.config();
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
  res.render("pages/posts", {
    listImg: JSON.stringify(listImg),
    GITHUB_IMAGE_PATH: process.env.GITHUB_IMAGE_PATH,
  });
});

app.get("/publish", async function (req, res) {
  const git = require("simple-git")();
  const fs = require("fs");
  const url = require("url");

  try {
    // console.log(await git.add("*"));
    await git.pull();
    await git.add("*");
    await git.commit("test simple git");
    await git.push();
  } catch (e) {
    console.log(e);
  }
  res.json({ a: 1 });
});

app.listen(PORT, function () {
  console.log("Server is running at port " + PORT);
});
