var url = process.argv[2];
var http = require('http');
var str = '';

http.get(url, function(response){
	response.setEncoding('utf-8');
	response.on('data', function(data) {
		str += data;
	});
	response.on('end', function(){
		console.log(str.length);
		console.log(str);
	});
	response.on('error', console.error);
});