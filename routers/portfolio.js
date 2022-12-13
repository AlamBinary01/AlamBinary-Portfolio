const express = require('express');
const router = express.Router();
const path = require('path');
const controller= require("../controllers/portfolioC");
const publicPath = path.join(__dirname, "../public");
router.use(express.static(publicPath));

router.route("").get(controller.HomePage);
module.exports=router;