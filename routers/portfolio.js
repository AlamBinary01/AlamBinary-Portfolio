const express = require('express');
const router = express.Router();
const path = require('path');
const controller= require("../controllers/portfolioC");
const nodemialer = require("nodemailer");
const publicPath = path.join(__dirname, "../public");
router.use(express.static(publicPath));
router.route("").post(controller.contactus);
router.route("").get(controller.HomePage);
module.exports=router;