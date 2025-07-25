const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const { type } = require("os");
app.use(cors());
app.use(express.json());

let menutest = [
  {
    id: 1,
    name: "Himashu Patil",
    price: 12000,
    type: "south Indian"
  },
  {
    id: 2,
    name: "Divyanshu Thakare",
    price: 15000,
    type: "north Indian"
  },
];


// middleware to check password and user
app.use("/menu", (req, res, next) => {
  if (req.method === "GET") {
    const { user, pass } = req.query;
    if (user === "admin" && pass === "menutest") {
      next();
    } else {
      res.status(401).send("unauthorized access attempt");
    }
  } else {
    next();
  }
  console.log("Login successful, welcome to the menu portal!");
});

app.get("/menu", (req, res) => {
  res.send(menutest);
});


app.post("/menus", (req, res) => {
  const newMenu = req.body;
  menutest.push(newMenu);
  res.send("Data received successfully, Yahoo!");
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is running on port 3000 http://localhost:3000");
});
