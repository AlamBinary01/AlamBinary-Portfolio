const express = require("express");
const app = express();
const route = require("../routers/portfolio");
const nodemialer = require("nodemailer");
const body_parser = require("body-parser");
const port = process.env.port | 3001;
app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(route);
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Listening At Port http://localhost:3001.");
});
