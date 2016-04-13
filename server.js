const HTTP = require('http'),
      PORT = 1337;

function onRequest(req, res) {
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.write('Hello world');
  res.end();
}

HTTP.createServer(onRequest).listen(PORT);

console.log(`The http server has started at: http://localhost:${PORT}/`);
