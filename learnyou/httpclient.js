var url = process.argv[2];
var http = require('http');

http.get(url, function(response){
	response.setEncoding('utf-8');
	response.on("data", function(data) {
		console.log(data);
	});
	//response.on("data", console.log) 
	//commented line above and error line below from official solution after I passed tests
	response.on("error", console.error);
});