const http = require('http');

const fs = require("fs");

const server = http.createServer((req, res) => {
console.log("Request Received !");
var data = fs.readFileSync('events.json');
res.end(data);
});

server.listen(3090);