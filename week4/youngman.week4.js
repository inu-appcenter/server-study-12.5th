const fs = require("fs");
//readFile('읽고자하는 파일이름',읽을때옵션 생략가능 (생략하면 Buffer형으로 데이터가 들어가 문자열로 바꾸기위해선  encoding : 'utf8',파일이 읽혀진 후 호출될 함수))

// non-blocking 해서 읽은 data를 변수에 담고 log로 출력해보기
// non-blocking-자신이 호출되었을 때 제어권을 바로 자신을 호출한 쪽으로 넘기며, 자신을 호출한 쪽에서 다른 일을 할 수 있도록 하는 것을 의미한다

function wait() {
  return new Promise((resolve, reject) => {
    fs.readFile("./file.md", { encoding: "utf8" }, (err, data) => {
      if (err) throw err;
      else
        setTimeout(() => {
          resolve(data);
        }, 2000);
    });
  });
}

async function main() {
  console.log(1);
  const result = await wait(); //await는 promise를 리턴하는 함수앞에 붙일수있다 이때 꺼내오는 값은 resolve값임 그리고 async안에서 await를 사용이 가능함
  console.log(result);
  console.log(2);
}
main();
