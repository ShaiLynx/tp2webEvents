const express = require('express')
const app = express()
const port = 8080

const fs = require("fs");


app.get('/', (req, res) => {
    console.log("Request Received !");
    fs.readFile('events.json', (err, data) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(data); });
})

app.listen(port);