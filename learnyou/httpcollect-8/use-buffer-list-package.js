var url = process.argv[2];
var http = require('http');
var bl = require('bl');
var str = '';

http.get(url, function(response){
	response.setEncoding('utf-8');
	response.pipe(bl (function(err, data) {
		if (err) {
			return console.error(err);
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});