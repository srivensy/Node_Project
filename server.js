
// ES6 (Ecma Script version 6) syntax

import express from 'express'

// const express = require("express") - Common JavaScript syntax


import dotenv from 'dotenv'

import mongoose from 'mongoose'
import bodyparser from 'body-parser'
// import employeeRoutes from "./routes/employeeRoutes.js";

import employeeRoutes from './routes/employeeRoutes.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongDB Connected Successfully")
}).catch((error)=>{
    console.log("MongDB Not Connected")
})

app.use(express.json());
app.use('/',employeeRoutes)

app.listen(PORT,()=>{
    console.log(`server started and running on port ${PORT}`)
})