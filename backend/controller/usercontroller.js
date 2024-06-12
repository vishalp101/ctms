const userschema = require("../model/usermodel");

exports.adduser = (req,res) =>{
    const user = new userschema(req.body);
    user.save()
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
                        message:"User add Sucessfully",
                        Status:200,
                        data:data,
                    });
                }
            
    })
    .catch((err)=>{
        res.json({
            message:"Something Went WrongWhile Adding the user",
            Status:400,
            error:err,
        });
    })
}


exports.getAlluser = (req,res) => {
    userschema
    .find()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong in saving the user",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "user saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong in saving the user",
            status: 400,
            error: err,
          });
    })
}



exports.updateuserById = (req, res) => {
    userschema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the user",
            status: 400,
            error: err,
          });
        } 
        else 
        {
          res.json({
            message: "user updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the user",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteuserById = (req, res) => 
    {
    const id = req.params.id;
    console.log(id);
    userschema
    .findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleted the user",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "User deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Delete user",
        status: 400,
        error: err,
      });
    })
  }



