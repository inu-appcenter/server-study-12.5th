const Users = [
  {
    id: 1,
    email: "123@app.com",
    name: "임태호",
    phone: null,
    age: 26,
    basket: ["사과", "딸기"],
  },
  {
    id: 2,
    email: "456@app.com",
    name: "김영만",
    phone: "010-0000-0000",
    age: 20,
    basket: [],
  },
  {
    id: 3,
    email: null,
    name: "황주환",
    phone: "010-0000-0001",
    age: 20,
    basket: ["파인애플", "메론", "딸기"],
  },
  {
    id: 4,
    email: null,
    name: "김희연",
    phone: null,
    age: 26,
    basket: ["국밥"],
  },
  {
    id: 5,
    email: "abcd@app.com",
    name: "심재서",
    phone: "010-0000-1010",
    age: 21,
    basket: ["사과", "딸기", "바나나", "수박"],
  },
  {
    id: 6,
    email: null,
    name: "윤철중",
    phone: "010-0000-1234",
    age: 20,
    basket: [],
  },
  {
    id: 7,
    email: "efg@app.com",
    name: "정민성",
    phone: "010-0000-3434",
    age: 20,
    basket: ["수박", "딸기"],
  },
];

console.log("-----------------1번 문제-----------"); //1번 문제
const numberOfPerson = Users.length;
console.log(numberOfPerson);

console.log("-------------2번 문제-----------");
//2번 문제
function cirmianl(element) {
  if (element.phone === null && element.email === null) {
    return 1;
  }
}

const criminalUsers = Users.filter(cirmianl);

console.log(criminalUsers);

console.log("-------------3번 문제 나이 많은 유저-------------");

// 가장 나이가 많은 유저들
let max = Math.max.apply(
  null,
  Users.map((a) => a.age)
);
let min = Math.min.apply(
  null,
  Users.map((a) => a.age)
);
const oldUsers = Users.filter(function (user) {
  return user.age == max;
});
console.log(oldUsers);

console.log("---------------4번 문제 나이 어린 유저-------------");

// 가장 나이가 어린 유저들

const youngUsers = Users.filter(function (user) {
  return user.age == min;
});
console.log(youngUsers);

console.log("------------5번 문제 장바구니---------"); // 장바구니에 가장 많은 아이템을 담은 유저들
let userMax = Math.max.apply(
  null,
  Users.map((a) => a.basket.length)
);
const richUser = Users.filter(function (user) {
  return user.basket.length == userMax;
});
console.log(richUser);

console.log("---------------6번 문제 ---------------");

// 한 해가 지난 후 나이 먹은 유저들
const nextYearUsers = Users.map((e) => {
  e.age = e.age + 1;
  return e;
});

console.log(nextYearUsers);
