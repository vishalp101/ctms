const express = require("express");
const routes = express.Router()

const taskcontroller = require("../controller/taskcontroller");

const validate = require("../middleware/zodmiddleware");
const taskvalidation = require("../utils/taskvalidation");

routes.post("/task",validate(taskvalidation),taskcontroller.addtask);



routes.post('/task',taskcontroller.addtask);
routes.get('/task',taskcontroller.getAlltask)
routes.post('/task/:id',taskcontroller.updatetaskById)
routes.delete('/task/:id',taskcontroller.deletetaskById)

module.exports = routes;