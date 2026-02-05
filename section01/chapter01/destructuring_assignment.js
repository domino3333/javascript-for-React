let a1 = [1, 5, 7, 2, 6, 3];

let [a, b, c, d] = a1;

console.log(d);

const animal = {
  name: "호돌이",
  age: 33,
  weight: 70,
};

let { name: CopyName, age: CopyAge, weight: CopyWeight } = animal;

console.log(CopyName);

function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

const person = { name: "Alice", age: 25, hobby: "react" };

greet(person);

//----------------------------------------------------------------------

const response = {
  status: 200,
  data: {
    user: { id: 101, name: "Bob", email: "bob@example.com" },
    posts: [
      { id: 1, title: "Hello World" },
      { id: 2, title: "JS Tips" },
    ],
  },
};

// 구조 분해로 바로 필요한 값만
const {
  data: {
    user: { name, email },
    posts,
  },
} = response;

console.log(name); // Bob
console.log(email); // bob@example.com
console.log(posts); // [{...}, {...}]
