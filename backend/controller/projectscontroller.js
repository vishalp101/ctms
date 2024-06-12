const projectschema = require("../model/projectsmodel");

exports.addproject = (req,res) =>{
    const project = new projectschema(req.body);
    project.save()
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
                        message:"project add Sucessfully",
                        Status:200,
                        data:data,
                    });
                }
            
    })
    .catch((err)=>{
        res.json({
            message:"Something Went Wrong While Adding the project",
            Status:400,
            error:err,
        });
    })
}


exports.getAllproject = (req,res) => {
    projectschema
    .find()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong in saving the project",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Project saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong in saving the Project",
            status: 400,
            error: err,
          });
    })
}



exports.updateprojectById = (req, res) => {
    projectschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the project in panel",
            status: 400,
            error: err,
          });
        } 
        else 
        {
          res.json({
            message: "project updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the project",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteprojectById = (req, res) => 
    {
    const id = req.params.id;
    console.log(id);
    projectschema
    .findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the project",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "project deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete project",
        status: 400,
        error: err,
      });
    })
  }





