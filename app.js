const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('This is Pickup Service\n');
});

server.listen(3000, () => {
  console.log('Pickup service running on port 3000');
});