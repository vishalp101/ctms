const express = require("express");
const routes = express.Router()

const usercontroller = require("../controller/usercontroller");


const validate = require("../middleware/zodmiddleware");
const uservalidate = require("../utils/uservalidation");

routes.post("/user",validate(uservalidate),usercontroller.adduser);



routes.post('/user',usercontroller.adduser);
routes.get('/user',usercontroller.getAlluser);
routes.post('/user/:id',usercontroller.updateuserById);
routes.delete('/user/:id',usercontroller.deleteuserById);


module.exports = routes;