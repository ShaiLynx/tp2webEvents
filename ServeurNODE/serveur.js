const express = require('express')
const app = express()
const port = 3090

const fs = require("fs");


app.get('/', (req, res) => {
    console.log("Request Received !");
    fs.readFile('events.json', (err,data) => { res.send(data); });
})

app.listen(port);