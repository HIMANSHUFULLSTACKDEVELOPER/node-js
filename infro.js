const http = require("http");
const url = require("url");
 
const server = http.createServer((req, res) => {
  console.log(req.headers)
  const dataStudent = [
    {
      message: "Hello World",
      name: "himanshu",
    },
    {
      message: "Hello World",
      name: "achal",
    },  {
      message: "Hello World",
      name: "ayush",
    },
  ];
 
  const dataTeacher = [
    {
      subject: "logical",
      name: "Ayush B Sir",
    },
    {
      subject: "mobile app",
      name: "ayush Sir",
    },
  ];
 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
 
  if (req.url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(dataStudent));
    return;
 
  } else if (req.url === "/teachers") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(dataTeacher));
    return;
 
 
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello and Welcome to node js class</h1>");
    return;
 
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
    return;
  }
  
});
 
server.listen(3001, () => {
  console.log(
    "Server is running on port 3001 http://localhost:3001 "
  );
});
 