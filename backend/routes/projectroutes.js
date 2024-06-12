const express = require("express");
const routes = express.Router()

const projectscontroller = require("../controller/projectscontroller");

const validate = require("../middleware/zodmiddleware");
const projectvalidation = require("../utils/projectvalidation");

routes.post("/project",validate(projectvalidation),projectscontroller.addproject);

routes.post('/project',projectscontroller.addproject);
routes.get('/project',projectscontroller.getAllproject)
routes.post('/project',projectscontroller.updateprojectById)
routes.delete('/project',projectscontroller.deleteprojectById)


module.exports = routes;