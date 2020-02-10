//Mongooooooose
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var server = express();

//Port Number
const port = 3000;

//adding middleware
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
server.use(cors(corsOptions));

//body - parser
server.use(bodyparser.json());

server.get("/", (req, res)=>{
    res.send('a GET request!');
});


//Affirm connection to server
server.listen(port, ()=>{
    console.log('Server started at port: '+port);
})
