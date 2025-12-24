// console.log("Welcome to Express js,just now I've added nodemon into my project")

import express from 'express'

// above one is based on ES-6 (javascript) Module 

// const express = require('express')

// above one is based on comon javascript module

const app = express()
const port = 5000

// examples for API's

// we have 4 types of API's

// GET,POST,PUT/UPDATE , DELETE

// GET API

app.get('/name',(request,response)=>{
    response.send("My name is Rajesh")
})

app.get('/designation',(request,response)=>{
    response.send("I have been working as Software Development Lead")
})

app.get('/',(request,response)=>{
    response.send("This is home page")
})

app.listen(port,()=>{
    console.log("Server is running successfully!...")
})

