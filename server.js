import express from 'express'
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import bodyparser from 'body-parser'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongDB Connect Successfully")
}).catch((error)=>{
    console.log("MongDB Not Connected")
})

app.listen(PORT,()=>{
    console.log(`server started and running on port ${PORT}`)
})