const dog = {
  name: "몽실이",
  age: 13,
};

const keys = Object.keys(dog);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let i = 0; i < keys.length; i++) {
  console.log(dog[keys[i]]);
}

let arr = [1, 10, 3, 50, 2];

arr.forEach((element) => {
  console.log(element);
});

console.log(arr.map((v) => v * 20 + 1));

const instanceArr = [
  { name: "강민호", age: 22 },
  { name: "강민호", age: 30 },
  { name: "김할아버지", age: 10 },
  { name: "김할머니", age: 30 },
];

let resultInstance = instanceArr.find((instance) => instance.age === 30);
console.log(resultInstance);

let resultInstance2 = instanceArr.filter(
  (instance) => instance.name === "강민호",
);

console.log(resultInstance2);

let numberArr = [1, 10, 3, 50, 2];
console.log(numberArr.join("M"));

console.log(numberArr.sort((a, b) => a - b));

let numberArr3 = [1, 100];
let numberArr4 = [1, 2000, 50, 2];

console.log(numberArr3.concat(numberArr4));

const sad = ["강민호", "인덱스1", "인덱스2"];

console.log();

let abd = sad.join("~");
console.log(abd.split("~"));

let numberArr10 = [1, 10, 3, 50, 2, 100, 2, 542, 6112, 71];
console.log(numberArr10.slice(2, 10));
