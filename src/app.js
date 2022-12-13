const express = require("express");
const app = express();
const path = require("path");
// const router=require("./routers/portfolio");
const port = process.env.port | 3002;
const staticpath= path.join(__dirname+"../public");
app.set("view engine","ejs");

app.get("",(req,res)=>{
    res.render("index");
});
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Listening At Port http://localhost:3001.");
});
