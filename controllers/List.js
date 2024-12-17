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
    res.status(200).json(list)
}
exports.singleList=async(req,res)=>{
    const id=req.params.id
    const list=await List.findById(id)
    if(!list){
        return res.status(400).json({message:"List not found"})
    }
    res.status(200).json(list)
}
exports.updateList=async(req,res)=>{
    const id=req.params.id
    const {data}=req.body
    const list=await List.findByIdAndUpdate(id,data)
    if(!list){
        return res.status(400).json({message:"List not found"})
    }
    res.status(200).json(list)
}
exports.deleteList=async(req,res)=>{
    const id=req.params.id
    const list=await List.findByIdAndDelete(id)
    res.status(200).json(list)
}