var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function(request, response){
    var URL = request.url;
    var queryData = url.parse(URL, true).query;

    console.log(__dirname);

    if(URL == "/") URL = "/dashboard.html";

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + URL));
});

app.listen(80);