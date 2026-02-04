//구조 분해 할당
// 배열을 분해하여 변수에 할당

let array = [1, 2, 3];
let one = array[0];
let two = array[1];
let three = array[2];

let [_one, _two, _three = 10, four = 4] = array;
console.log(_one);
console.log(_two);
console.log(_three);
console.log(four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};

let person3 = person;
console.log(person3 === person);

let { age: myAge, name: myName, hobby: myHobby, extra = "hello" } = person;
//let _myAge2 = person.age;
//let _myName = person.name;
//let _myHobby = person.hobby;

console.log(myAge, myName, myHobby, extra);
