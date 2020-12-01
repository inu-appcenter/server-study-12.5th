const fs = require("fs");
const path = require("path");

function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

(async () => {
  const res = await read(path.join(__dirname, "file.md"));
  console.log("1");
  // setTimeout으로 딜레이를 줘도 순서는 출력 순서는 변하지 않는다.
  console.log(res);
  console.log("2");
})();
