const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose
 .connect("mongodb://127.0.0.1:27017/test")
 .then((success) => {
    console.log("Database is connected");
  })
 .catch((err) => {
    console.log(err);
  });

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 3000");
  }
});


const userroutes = require("./routes/userroutes");
app.use("/user",userroutes);

const projectroutes = require("./routes/projectroutes");
app.use("/project",projectroutes);


const taskroutes = require("./routes/taskroutes");
app.use("/task",taskroutes);

