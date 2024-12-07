const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const mongoUrl="mongodb+srv://vinitmittal295:1234@cluster0.yohx5ud.mongodb.net/task7dec"
mongoose.connect(mongoUrl).then(()=>{
    console.log("connected to db");
    
})
.catch((error)=>{
    console.log("error in connecting to db",error);
})
const userRoutes=require("./routes/User")
app.use("/test",userRoutes)

const port=8080
app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})