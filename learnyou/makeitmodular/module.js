module.exports = function(directory, extension, callback) {
	extension = "." + extension;
	var fs = require('fs');
	var path = require('path');

	fs.readdir(directory, function(err, data) {
		if (err) {return callback(err);}
		data = data.filter(function(file){
			if (path.extname(file) === extension) {
				return file;
			}
		});
		callback(null, data);
	});
}