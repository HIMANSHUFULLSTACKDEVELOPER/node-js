const http = require("http");
 
const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
 
  res.writeHead(200, { "Content-Type": "text/html" }); // <-- fixed content-type
 
  if (req.url === "/hello") {
    res.end("<h2>Hello, World!</h2>");
  } else if (req.url === "/bye") {
    res.end("<h2>Goodbye, World!</h2>");
  } else {
    res.end("<h2>Default Response from Node.js Server</h2>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});