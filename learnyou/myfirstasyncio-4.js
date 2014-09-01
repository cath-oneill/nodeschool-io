var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFile(path, 'utf8', function(err, data) {
	if (err) {throw err;}
	var fileLength = data.split('\n').length;
	console.log(fileLength-1);
});
 
