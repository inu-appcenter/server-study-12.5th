const fs = require("fs");

const read = new Promise((resolve, reject) => {
  fs.readFile("./file.md", { encoding: "utf-8" }, (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

async function main() {
  try {
    console.log(1);
    console.log(await read);
    console.log(1);
  } catch (error) {
    console.error(error.message);
  }
}
// 1 서버스터디 1 출력
main();
