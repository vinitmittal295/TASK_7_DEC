const jwt=require('jsonwebtoken');
const usermodel=require('../models/User');
const secret="kmfkmkmrgklkmfkgmkr"
const verifyAuth=async(req,res,next)=>{
    try {
        const header=req.headers.authorization;
        if(!header){
            return res.status(401).send({message:"No token found"})
        }
        const token=header.split(" ")[1]
        console.log("token in verify ",token);
        
        if(!token){
            return res.status(401).send({message:"No token found"})
        }
        const verifydecode=jwt.verify(token,secret)
        if(!verifydecode){
            return res.status(401).send({message:"not veified token and secret"})
        }
        const {id}=verifydecode
        const user=await usermodel.findById(id)
        console.log("verify chl gya",user);
        next()
        
    } catch (error) {
        console.log("error in verify auth middleware",error);
        
    }
}
module.exports=verifyAuth