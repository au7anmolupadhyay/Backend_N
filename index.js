require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res) => {
    res.send("welcome to the home page!")
})

app.get('/twitter', (req,res) => {
    res.send("this is the twitter page!")
})

app.get('/login', (req,res) => {
    res.send("<h1>login to our website</h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`it is running on ${port}`)
})