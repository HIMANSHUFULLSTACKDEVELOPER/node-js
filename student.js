const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const studentData = [
    {
        message: "hello world",
        name: "himanshu patil",
    },
    {
        message: "hello world",
        name: "himanshu patil",
    },
   
];

  const teacherData = [
    {
       subject: "programming",
        name: "ayush  N",
    },
    {
        subject: "hello world",
        name: "himanshu patil",
    },
                                                                                       
];

res.writeHead(200, { "Content-Type": "application/json" });
let result = JSON.stringify(studentData);
res.write(result);
res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
