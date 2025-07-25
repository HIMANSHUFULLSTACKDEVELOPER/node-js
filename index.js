const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let employeeData = [
  {
    id: 1,
    name: "Himashu Patil",
    email: "himanshu@example.com",
  },
  {
    id: 2,
    name: "Divyanshu Thakare",
    email: "divyanshu@example.com",
  },
];


// middleware to check password and user
app.use("/engineers", (req, res, next) => {
  if (req.method === "GET") {
    const { user, pass } = req.query;
    if (user === "himanshu" && pass === "46875") {
      next();
    } else {
      res.status(401).send("unauthorized access attempt");
    }
  } else {
    next();
  }
  console.log("Login successful, welcome to the engineers' portal!");
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
server.listen(4000, () => {
  console.log("Server is running on port 4000 http://localhost:4000");
});
