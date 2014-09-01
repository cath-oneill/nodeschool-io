var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileType = "." + process.argv[3];
fs.readdir(directory, function(err, data) {
	if (err) {throw err;}
	for (var i = 0; i < data.length; i++) {
		if (path.extname(data[i]) === fileType) {
			console.log(data[i]);
		}
	}
});