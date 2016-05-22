var http = require("http");

var server = http.createServer(waiter);

function waiter(req, res) {

    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);//注意这里不能使用 *
    res.setHeader('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.end("end");

}
server.listen(3000, "localhost");
