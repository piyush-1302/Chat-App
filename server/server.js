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
	
	/*socket.emit('newMessage',{
		from : 'SlashRoot',
		text : 'Hello! How are You?',
		createdAt : 12345
	});*/
	socket.emit('welcoming',{
		from : 'Admin',
		text : 'Welcome to site',
		createdAt : new Date().getTime()
	});

	socket.broadcast.emit('newMessage',{
			from : 'Admin',
			text : 'New User Joined',
			createdAt : new Date().getTime()
	});

	socket.on('createMessage',(message)=>{
		console.log('Message',message);
		/*io.emit('newMessage',{
			from : message.from,
			text : message.text,
			createdAt : new Date().getTime()  
		});*/

		/*socket.broadcast.emit('newMessage',{
			from : message.from,
			text : message.text,
			createdAt : new Date().getTime()
		});*/
	});

	socket.on('disconnect',()=>{
		console.log('User was disconnected');
	});
});


server.listen(port,(err)=>{
	if(!err)
		console.log("Server running on port " + port);
});