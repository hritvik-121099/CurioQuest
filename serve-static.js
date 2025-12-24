const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let filePath = path.join(process.cwd(), req.url === '/' ? '/index.html' : req.url.split('?')[0]);
  // Prevent directory traversal
  if (!filePath.startsWith(process.cwd())) filePath = path.join(process.cwd(), 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
    res.end(data);
  });
}).listen(port, () => console.log(`Static server running at http://localhost:${port}`));
