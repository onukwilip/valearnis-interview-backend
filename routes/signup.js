const express = require("express");
const signup = require("../controllers/signup");
const signUpRouter = express.Router();

signUpRouter.post("/", signup);

module.exports = signUpRouter;
