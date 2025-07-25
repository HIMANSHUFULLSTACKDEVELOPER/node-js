const http = require("http");
 

let studentData = [
 
];
 
const teachers = [
  { name: "Ayush B Sir", subject: "Programming" },
  { name: "Yogesh Y Sir", subject: "Prompt Engineering" },
  { name: "Yash Sir", subject: "RDBMS" },
];0

 
const server = http.createServer((req, res) => {
  console.log(req.headers);
 

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   

  if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(studentData));
 

  } else if (req.method === "POST" && req.url === "/students") {
    let stringData = "";
    req.on("data", (chunk) => {
      stringData += chunk.toString();
    });
    req.on("end", () => {
      try {
        const student = JSON.parse(stringData);
        studentData.push(student);
        console.log("Updated studentData:", studentData);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Student added successfully" }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

  } else if (req.method === "GET" && req.url === "/teachers") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(teachers));

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid request" }));
  }
});
 
server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
 
 
 