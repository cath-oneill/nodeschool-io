var through = require('through'),
	split = require('split'),
	counter = 0;

var altCaps = function(line) {
	counter++;
	if (counter%2 === 0) {
		line = line.toString().toUpperCase();
	} else {
		line = line.toString().toLowerCase();
	}
	console.log(line);
};

process.stdin.pipe(split()).pipe(through(altCaps));
