// Development = Node.js server + React server

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(1337, () => {
    console.log("Server is running, you better catch it!");
  });