const express = require('express')
const path = require('path')

const app = express()

//we're setting up an endpoint that sends a file for the website to read and we are smushing two files pathes together (what we need to get to index.html)

//dirname is the file path of the current file that you are in

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})