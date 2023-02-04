const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRouter = require("./routes/login");
const connect = require("./connect");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const signUpRouter = require("./routes/signup");
dotenv.config();

connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/login", loginRouter);
app.use("/api/signup", signUpRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
