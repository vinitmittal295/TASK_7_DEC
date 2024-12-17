const List=require("../models/List")

exports.createList=async(req,res)=>{
    const {data}=req.body
    const {listname}=data
    const existingList=await List.findOne({listname})
    if(existingList){
        return res.status(400).json({message:"List already exists"})
    }
    const list =new List(data)
    await list.save()
    res.status(200).json(list)
}

exports.getAllList=async(req,res)=>{
    const list =await List.find()
}
