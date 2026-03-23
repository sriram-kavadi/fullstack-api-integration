const express=require("express");

const app=express();

const port=process.env.PORT||9999;

const cors=require("cors")
const corsOptions={
    origin:"https://fullstack-api-integration-1.onrender.com"
};
app.use(cors()); // simple & correct for now
app.use(express.json());
app.get("/api",(req,res)=>{
    res.json({fruits:["apple","banana","orange"]})
})

app.get("/hey",(req,res)=>{
    res.json({check:["nikhil","sriram"]})
})

app.listen(port,()=>{
    console.log("listening..")
})