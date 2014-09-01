var http = require('http'),
	port = process.argv[2],
	url = require('url'),
	obj = {
		hour: 0,
		minute: 0,
		second: 0
	},
	unix_obj = {
		unixtime: 0
	};


var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(req.method === 'GET') {
		var info = url.parse(req.url, true),
			query = info.query.iso,
			d = new Date(query);

		if (info.pathname === '/api/parsetime') {
			obj.hour = d.getHours();
			obj.minute = d.getMinutes();
			obj.second = d.getSeconds();
			res.write(JSON.stringify(obj));
		} else if (info.pathname === '/api/unixtime') {
			unix_obj.unixtime = d.getTime();
			res.write(JSON.stringify(unix_obj));
		}

		res.end();
	} else { return 'ERROR!'; }
});

server.listen(port);


