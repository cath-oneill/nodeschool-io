var urlArray = process.argv.slice(2),
	strArray = [],
	count = 0,
	http = require('http');

function getData(url, index, callback) {
	var str = '';
	http.get(url, function(response){
		response.setEncoding('utf-8');
		response.on('data', function(data) {
			str += data;
		});
		response.on('end', function(){
			return callback(index, str);
		});
		response.on('error', console.error);
	});
}


function counter(index, str) {
	count ++;
	strArray[index] = str;
	if (count === urlArray.length) {
		strArray.forEach(function(x){
			console.log(x);
		});
	}
}

for (var i = 0; i < urlArray.length; i++) {
	getData(urlArray[i], i, counter);
}




