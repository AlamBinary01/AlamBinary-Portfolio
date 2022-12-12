const express = require("express");
const app = express();
const port=process.env.port|3000;

app.use("/",(req,res)=>{
    res.send("Hello World");
});
app.listen(port, () => {
    console.log("listening to the server on http://localhost:3000");
});