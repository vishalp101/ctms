const taskschema = require("../model/taskmodel");

exports.addtask = (req,res) =>{
    const task = new taskschema(req.body);
    task.save()
    .then((data)=>{
        if(!data)
            {
                res.json({
                    message : "Somethings went wrong",
                    Status:400,
                    error:err,
                });
            }
                else{
                    res.json({
                        message:"Task add Sucessfully",
                        Status:200,
                        data:data,
                    });
                }
            
    })
    .catch((err)=>{
        res.json({
            message:"Something Went Wrong While Adding the Task",
            Status:400,
            error:err,
        });
    })
}


exports.getAlltask = (req,res) => {
    taskschema.find()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the Task",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Task saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the Task",
            status: 400,
            error: err,
          });
    })
}



exports.updatetaskById = (req, res) => {
    taskschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Task",
            status: 400,
            error: err,
          });
        } 
        else 
        {
          res.json({
            message: "Task updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Task",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletetaskById = (req, res) => 
    {
    const id = req.params.id;
    console.log(id);
    taskschema
    .findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the Task",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Task deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete Task",
        status: 400,
        error: err,
      });
    })
  }



