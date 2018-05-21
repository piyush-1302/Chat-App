const path = require('path');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname,'../public'); 
const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection',(socket)=>{
	console.log('New User connected');
	
	socket.on('disconnect',()=>{
		console.log('User was disconnected');
	});
});


server.listen(port,(err)=>{
	if(!err)
		console.log("Server running on port " + port);
});