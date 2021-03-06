const users = [
  {
    id: 1,
    email: '123@app.com',
    name: '임태호',
    phone: null,
    age: 26,
    basket: ['사과', '딸기'],
  },
  {
    id: 2,
    email: '456@app.com',
    name: '김영만',
    phone: '010-0000-0000',
    age: 20,
    basket: [],
  },
  {
    id: 3,
    email: null,
    name: '황주환',
    phone: '010-0000-0001',
    age: 20,
    basket: ['파인애플', '메론', '딸기'],
  },
  {
    id: 4,
    email: null,
    name: '김희연',
    phone: null,
    age: 26,
    basket: ['국밥'],
  },
  {
    id: 5,
    email: 'abcd@app.com',
    name: '심재서',
    phone: '010-0000-1010',
    age: 21,
    basket: ['사과', '딸기', '바나나', '수박'],
  },
  {
    id: 6,
    email: null,
    name: '윤철중',
    phone: '010-0000-1234',
    age: 20,
    basket: [],
  },
  {
    id: 7,
    email: 'efg@app.com',
    name: '정민성',
    phone: '010-0000-3434',
    age: 20,
    basket: ['수박', '딸기'],
  },
];

// 몇 명의 유저가 있는지
const numberOfPerson = users.length;
console.log(numberOfPerson);

// 괘씸하게 이메일과 휴대폰 둘 다 안 적은 유저들
const criminalUsers = users.filter((user) => !user.email && !user.phone);
console.log(criminalUsers);

// 가장 나이가 많은 유저들
const oldAge = Math.max(...users.map((user) => user.age));
const oldUsers = users.filter((user) => user.age === oldAge);
console.log(oldUsers);

// 가장 나이가 어린 유저들
const youngAge = Math.min(...users.map((user) => user.age));
const youngUsers = users.filter((user) => user.age === youngAge);
console.log(youngUsers);

// 장바구니에 가장 많은 아이템을 담은 유저들
const num = Math.max(...users.map((user) => user.basket.length));
const richUsers = users.filter((user) => user.basket.length === num);
console.log(richUsers);

// 한 해가 지난 후 나이 먹은 유저들
const nextYearUsers = users.map((user) => ({
  ...user,
  age: user.age + 1,
  basket: user.basket.slice(),
}));
console.log(nextYearUsers);
