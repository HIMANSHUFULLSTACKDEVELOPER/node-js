const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
 
let employeeData = [
  { name: "him", age: 19 },
  { name: "ayu", age: 21 },
];
 
app.use(cors());
app.use(express.json());
 
app.use((req, res, next) => {
  console.log("Hello middleware 1");
  next();
});
 
app.use((req, res, next) => {
  console.log("Hello middleware 2");
   next();
});
 
app.use((req, res, next) => {
  console.log("Hello middleware 3");
  next();
});
 
app.get("/employee", (req, res) => {
  res.send(employeeData);
});
 
app.post("/employee", (req, res) => {
  const newEmployee = req.body;
  employeeData.push(newEmployee);
  res.send({ message: "Employee added", data: newEmployee });
});
 
app.get("/", (req, res) => {
  res.send("Page not Found");
});
 
const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is running on port 3000 http://localhost:3000");
});