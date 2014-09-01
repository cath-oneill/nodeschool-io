var through = require('through');

var capitalize = function capitalizeF(b) {
	this.queue(b.toString().toUpperCase());
}

process.stdin.pipe(through(capitalize)).pipe(process.stdout);