var concat = require('concat-stream');

process.stdin.pipe(concat(function(data){
	data = data.toString().split('').reverse().join('');
	process.stdout.write(data);
	process.stdout.write('\n');
}));