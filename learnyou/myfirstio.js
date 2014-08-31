var fs = require('fs');
var fileLength = fs.readFileSync(process.argv[2], 'utf8').split('\n').length;
console.log(fileLength-1);
