const mongoose=require("mongoose")
const listSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item"
    }]
})