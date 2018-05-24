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
	var li = jQuery('<li></li>');
	li.text(`${message.from} : ${message.text}`);
	jQuery('#messages').append(li);
})

/*socket.emit('createMessage',{
	from : 'PK',
	text : "heyyy"
},function(data){
	console.log('Got it!',data);
});*/

jQuery('#message-form').on('submit',function(e){
	e.preventDefault();

	socket.emit('createMessage',{
		from : 'User',
		text : jQuery('[name=message]').val() 
	},function(){

	});
});