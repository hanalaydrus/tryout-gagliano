
url = process.argv[2];

var http = require('http');

var re = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
http.get(url, function (response) {
    response.on('data', function (chunk) {
        var str=chunk.toString();
        var match = re.exec(str);
        if (match && match[2]) {
          console.log(match[2]);
        }
    });
});
