const http = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");

// 1. Create an HTTP server that:
//    - Serves the student data on GET /students
//    - Shows total number of students on GET /stats
//    - Shows courses list on GET /courses
//    - Returns 404 for undefined routes

const students = JSON.parse(fs.readFileSync("./students.json", "utf-8"));
console.log(students);

const courses = students.map((student) => {
  return student.course;
});
// console.log(courses);

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  } else if (url === "/stats") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const studentsNum = students.length;
    res.end(`Number of Students ${studentsNum.toString()}`);
  } else if (url === "/courses") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Courses ${courses.toString()}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Welcome to Ashraf's server 🎉");
});
