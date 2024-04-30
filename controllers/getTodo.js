//import th Model
const Todo = require("../models/Todo");


exports.getTodo = async(req,res) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});
        //responses
        
    }
    catch(err){
        
    }
}
