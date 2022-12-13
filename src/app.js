const express = require("express");
const app = express();
const path = require("path");
const fs=require("fs");
const axios= require("axios");
const route = require("../routers/portfolio");
const port = process.env.port | 3001;
app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.use(route);
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Listening At Port http://localhost:3001.");
});
