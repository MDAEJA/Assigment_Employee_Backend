const express = require("express");
const employeecontrollers = require("../Controller/employeeController");

const routers = express.Router();

routers.post("/create",employeecontrollers.create);
routers.get("/read",employeecontrollers.listOfEmployee);
routers.put('/update',employeecontrollers.updateEmployee);
routers.delete('/delete',employeecontrollers.deleteEmployee);

module.exports = routers;