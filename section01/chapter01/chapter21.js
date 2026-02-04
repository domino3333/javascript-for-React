const array = [1, 2, 3, 4];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
// 2. forEach
console.log;
//array.forEach((value) => console.log(value));

//3. for of
for (const data of array) {
  console.log(data);
}

//4. for in 문
for (const index in array) {
  console.log(`index = ${index} ${array[index]}`);
}

// 5.1 객체 순회, Object.keys 사용
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};

// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}
// 5.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}
