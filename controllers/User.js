const usermodel=require("../models/User")
// for creating user
const bcrypt=require("bcrypt")
// for login
const jwt=require("jsonwebtoken")
const secret="kmfkmkmrgklkmfkgmkr"
exports.creteUser=async(req,res)=>{

    const {name,email,password}=req.body
    const salt=bcrypt.genSaltSync(10)
    const hashPassword=bcrypt.hashSync(password,salt)
    
    const existingUser=await usermodel.findOne({email})
    if(existingUser){
        return res.status(400).json({message:"user already exist"})
    }
    const data={name,email,password:hashPassword}
    const newUser=new usermodel(data)
    await newUser.save()
    res.status(200).json(newUser)

}

exports.login=async(req,res)=>{
    const {email,password}=req.body
    const existingUser=await usermodel.findOne({email})
    if(!existingUser){
        return res.status(400).json({message:"user not exist"})
    }
    const match=bcrypt.compare(password,existingUser.password)
    const token=jwt.sign({id:existingUser._id},secret,{expiresIn:"1d"})
    res.json({token,existingUser})

}