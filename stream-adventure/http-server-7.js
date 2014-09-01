var http = require('http');
var through = require('through');

var capitalize = function capitalizeF(b) {
	this.queue(b.toString().toUpperCase());
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(capitalize)).pipe(res);
    }
    res.end();
});
server.listen(process.argv[2]);