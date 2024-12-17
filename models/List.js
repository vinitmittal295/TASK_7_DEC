const mongoose=require("mongoose")
const listSchema=new mongoose.Schema({
    listname:{
        type:String,
        required:true,
        unique:true
    },
},{
    timestamps:true,versionKey:false
}
)
module.exports=mongoose.model("list",listSchema)