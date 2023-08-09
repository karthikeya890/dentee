const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const port = process.env.DEV_PORT;

const signUp = require("./src/routers/signUpRouter");
const signIn = require("./src//routers/signInRouter");
const users = require("./src/routers/employees-router");
app.use("/signIn", signIn);
app.use("/signUp", signUp);
app.use("/users", users);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
