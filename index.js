const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  const parsedUrl = url.parse(req.url, true); 
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (query?.name === "invalid") {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(`Invalid name`);
    return;
  }

  
  if (pathname === "/himanshu") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("HELLO World");
    return;
  }

  
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end(`Invalid details`);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
