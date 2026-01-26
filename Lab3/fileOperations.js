const fs = require("fs");

// SYNC
// ///////////////////////////////////////////////////////////////////////////////
// Read Sync Version
const readFileSyncFun = () => {
  return JSON.parse(fs.readFileSync("./students.json", "utf-8"));
};

// Write Sync Version
const writeFileSyncFun = (student) => {
  const students = readFileSyncFun();

  students.push(student);

  fs.writeFileSync("./students.json", JSON.stringify(students));
};

writeFileSyncFun({
  id: 90,
  name: "Mohamed Ashraf",
  age: 25,
  course: "Node.js",
  grades: {
    math: 100,
    programming: 100,
  },
});

// ASYNC
// ///////////////////////////////////////////////////////////////////////////////

// Read Async Version
const readFileAsyncFun = () => {
  fs.readFile("./students.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    let parsedData = JSON.parse(data);
    console.log(parsedData);
    return parsedData;
  });
};

readFileAsyncFun();

// Write Async Version

const writeFileAsyncFun = async (student) => {
  const students = readFileSyncFun();

  students.push(student);
  fs.writeFile("./students.json", JSON.stringify(students), (err) => {
    console.log(err);
  });
};

writeFileAsyncFun({
  id: 100,
  name: "Mohamed Ashraf ASYNC",
  age: 25,
  course: "Node.js",
  grades: {
    math: 100,
    programming: 100,
  },
});
