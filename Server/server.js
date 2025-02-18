import express from "express"
import cors from "cors"
import  'dotenv/config'
import cookieParser from "cookie-parser"
import connectDB from "./config/mongodb.js"

import authRoute from "./routes/authRoute.js"
const app=express()
const port=process.env.PORT || 4000
connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))


//Api Endpoints
app.get("/",(req,res)=>{
res.send("API working")
})

app.use("/api/auth",authRoute)

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
})