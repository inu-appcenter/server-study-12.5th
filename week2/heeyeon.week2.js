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

function customMap(func, arr){
    const custom_map = []
    var i

    for ( i=0; i<arr.length; i++){
        custom_map.push(func(arr[i], i, arr))
    }
    return custom_map;
}

function customFilter(func, arr){
    const custom_filter = []
    var i

    for (i=0; i<arr.length; i++){
        const item = func(arr[i], i, arr)
        if(item){
            custom_filter.push(arr[i])
        } 
    }
    return custom_filter;

}

const oldAge = Math.max(...customMap((v) => v.age, users))
console.log(oldAge);
const oldUsers = customFilter((v) => v.age == oldAge, users);
console.log(oldUsers);

console.log("===============================");
