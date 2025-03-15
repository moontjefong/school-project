function getRandomNodeJSCode() {
  const http = require('http');
  const fs = require('fs');
  
  http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }).listen(3000, () => {
    console.log('Server started on port 3000');
  });
}
