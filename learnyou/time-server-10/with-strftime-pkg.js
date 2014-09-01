var net = require('net'),
	port = Number(process.argv[2]);

var server = net.createServer(function (socket) {
	var time = require('strftime');
  	socket.write(time('%F %H:%M'));
  	socket.end();
});

server.listen(port);
