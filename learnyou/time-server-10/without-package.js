var net = require('net'),
	port = Number(process.argv[2]);

var twoDigit = function twoDigitF(x) {
	return ((x < 10) ? ('0' + x) : x);
};


var now = function nowF() {
	var date = new Date(),
		y = date.getFullYear(),
		mo = twoDigit(date.getMonth() + 1),     // starts at 0
		d = twoDigit(date.getDate()),      // returns the day of month
		h = twoDigit(date.getHours()),
		mi = twoDigit(date.getMinutes()),
		time = y + '-' + mo + '-' + d + ' ' + h + ':' + mi;
	console.log(y);
	return time;
};


var server = net.createServer(function (socket) {
  	socket.write(now());
  	socket.end();
});

server.listen(port);
