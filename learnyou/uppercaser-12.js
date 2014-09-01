var http = require('http'),
	port = process.argv[2],
	map = require('through2-map');

var server = http.createServer(function (req, res) {
	if(req.method === 'POST') {
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	} else { return 'ERROR!'; }
});
server.listen(port);