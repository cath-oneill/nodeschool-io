var filteredList = require('./module.js');
var directory = process.argv[2];
var fileType = process.argv[3];

filteredList(directory, fileType, function(err, data) {
	if (err) {return console.log(err);}
	data.forEach(function(file) {
		console.log(file);
	});
});