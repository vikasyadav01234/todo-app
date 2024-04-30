//import th Model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try{
       const {id} = req.params;
       const {title, description} =req.body;

       const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title, description, updateAt: Date.now()},
       )
       //data for given id Found
       res.status(200).json({
        success:true,
        data:todo,
        message: "Updated Successfully",
        })
    }
    catch(err){
       
    }
}
