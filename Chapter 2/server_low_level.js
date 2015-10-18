/**
 * Created by John on 10/10/2015.
 */
var http = require('http');

var test;
test = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
});

test.listen(3000);