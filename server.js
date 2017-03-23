// HTTP PORTION

var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
}
players = 0;
var users = [];
var useq = [];
var cseq = [];
var round = 1;
var ret = 0;
var go = false;

//setting up order

for (var i = 0; i < 8; i++) {
	useq.push(Math.floor(Math.random() * (3 - 0 + 1)) + 0);
}
for (var i = 0; i < 8; i++) {
	cseq.push(Math.floor(Math.random() * (3 - 0 + 1)) + 0);
}
console.log(useq);
console.log(cseq);






// WEBSOCKET PORTION

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 

	function (socket) {
	
		console.log("We have a new client: " + socket.id);

		if (players < 4) {
			users.push(socket.id)
			players++;
			console.log(users);
			console.log(players);
		}

		if (players == 4){
			go = true;
			players++;
			console.log('should begin')
		}

		if(go){
			console.log('calling seq')
			game();

		}

		function playSeq(r){
			console.log('in seq');
			for (var i = 0; i < r; i++) {
				console.log(i);
				console.log(useq[i]);
				console.log(users[useq[i]]);
				io.to(users[useq[i]]).emit('play', [cseq[i], i]);
				// setTimeout(function(){
				// 	io.to(users[useq[i]]).emit('play', cseq[i-1]);
				// 	console.log('sending');
				// },(1500*i));
			}
		}

		function game(){
			if(round != 8){
				playSeq(round);
				go = false;
				ret = 0;
			} else {
				io.sockets.emit('Victory');
			}
		}

		function fail(){
			io.sockets.emit("fail");
		}

		
		///MY SOCKET EVENTS HERE
		socket.on('Green', function(data){
			console.log("Green");
			var player = users.findIndex(x => x == socket.id);
			//console.log(player);
			if(player!=-1){
				console.log(ret);
				if(useq[ret]==player && cseq[ret] == 0){
					ret++;
					if(ret == round){
						round++;
						setTimeout(game, 3000);
					}
				}else{
					console.log('fail1');
					fail();
					//console.log(socket.id);
				}
			}else{
				console.log('fail2')
				fail();
				//console.log(socket.id);
			}
			//console.log(users);
		});
		socket.on('Red', function(data){
			console.log("Red");
			var player = users.findIndex(x => x == socket.id);
			if(player!=-1){
				console.log(ret);
				if(useq[ret]==player && cseq[ret] == 1){
					ret++;
					if(ret == round){
						round++;
						setTimeout(game, 3000);
					}
				}else{
					console.log('fail1');
					fail();
				}
			}else{
				console.log('fail2')
				fail();
			}
		});
		socket.on('Yellow', function(data){
			console.log("Yellow");
			var player = users.findIndex(x => x == socket.id);
			if(player!=-1){
				console.log(ret);
				if(useq[ret]==player && cseq[ret] == 2){
					ret++;
					if(ret == round){
						round++;
						setTimeout(game, 3000);
					}
				}else{
					console.log('fail1');
					fail();
				}
			}else{
				console.log('fail2')
				fail();
			}
		});
		socket.on('Blue', function(data){
			console.log("Blue");
			var player = users.findIndex(x => x == socket.id);
			if(player!=-1){
				console.log(ret);
				if(useq[ret]==player && cseq[ret] == 3){
					ret++;
					if(ret == round){
						round++;
						setTimeout(game, 3000);
					}
				}else{
					console.log('fail1');
					fail();
				}
			}else{
				console.log('fail2')
				fail();
			}
		});


		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);