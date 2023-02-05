const express = require("express");
const sendMail = require("../controllers/mail");
const mailRouter = express.Router();

mailRouter.post("/", sendMail);

module.exports = mailRouter;
