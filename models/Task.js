const mongoose=require("mongoose")
const taskSchema=new mongoose.Schema(
    
    {
        listId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"list",
            required:true,
        },
        taskName:{
            type:String,
            required:true,
        }
},
{
    timestamps:true, versionKey:false
}
)

module.exports=mongoose.model("task",taskSchema)