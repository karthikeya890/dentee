const { Router } = require("express");
const app = Router();

const {
  getBasicEmployeeDetails,
  updateBasicEmployeeDetails,
} = require("../controllers/employees-controller");

app.get("/basicDetails", getBasicEmployeeDetails);
app.put("/updateDetails", updateBasicEmployeeDetails);

module.exports = app;
