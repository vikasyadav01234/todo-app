const mongoose = require("mongoose");

const toduSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        }
    }
)