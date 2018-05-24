var socket = io();
socket.on('connect',function (){
	console.log("Connected to server");

	/*socket.emit('createMessage',{
		from : 'Piyush',
		text : 'Hello! This is Piyush'
	});*/
});

socket.on('disconnect',function (){
	console.log("Disconnected from server");
});


socket.on('welcoming',function(message){
	console.log('Welcoming Message : ',message);
})

socket.on('newMessage',function(message){
	console.log('New Message',message);
})