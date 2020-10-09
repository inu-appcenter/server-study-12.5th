const users = [
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

// 1번
const numberOfPersion = users.length;
console.log(numberOfPersion);
console.log("===============================");

// 2번
const criminalUsers = users.filter(
  (v, i, a) => v.email == null && v.phone == null
);
console.log(criminalUsers);
console.log("===============================");

// 3번
const old = Math.max(...users.map((v) => v.age));
const oldUsers = users.filter((v) => v.age == old);

console.log(oldUsers);
console.log("===============================");

// 4번
const young = Math.min(...users.map((v) => v.age));
const youngUsers = users.filter((v) => v.age == young);

console.log(youngUsers);
console.log("===============================");

// 5번
const rich = Math.max(...users.map((v) => v.basket.length));
const richUsers = users.filter((v) => v.basket.length == rich);

console.log(richUsers);
console.log("===============================");

// 6번
const nextYearUsers = users.map((v, i, a) => {
  v.age += 1;
  return v;
});

console.log(nextYearUsers);
