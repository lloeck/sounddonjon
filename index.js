require('dotenv').config()
const lucas = 'Lucas'
const express = require('express')
const port = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/lucas', (req, res) => {
    res.send(lucas);
})

app.listen(port, () => {
    console.log(`start listening ${port}`)
     
})