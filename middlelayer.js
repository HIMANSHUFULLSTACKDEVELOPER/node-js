const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
 
app.use(cors());
app.use(express.json());
 
let employeeData = [
  {
    id: 1,
    name: "Alu Bhaji",
    email: "samosa@example.com",
  },
  {
    id: 2,
    name: "Kachori",
    email: "kachori@example.com",
  },
];
 
app.use((req, res, next) => {
  if (req.method === "GET") {
    next();
  } else if (req.query.user === "khushal" && req.query.pass === "2207") {
    next();
  } else {
    res.status(401).send("Are bhai userID aur pass kya hai?");
  }
  console.log("Hello Bhai kya chahiye!");
});
 
app.get("/engineers", (req, res) => {
  res.send(employeeData);
});
 
app.post("/engineer", (req, res) => {
  const newEmployee = req.body;
  employeeData.push(newEmployee);
  res.send("Data received successfully, Yahoo!");
});
 
const server = http.createServer(app);
server.listen(5000, () => {
  console.log("Server is running on port 5000 http://localhost:5000");
});