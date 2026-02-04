// filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨.

const filtResult = arr1.filter((v) => v.hobby === "독서");
console.log(filtResult);

let findItem = arr1.find((value) => value.hobby === "구길동");
console.log(findItem);

let findIndex = arr1.findIndex((value) => value.hobby === "독서");
console.log(findIndex);

const array = [1, 2, 3, 4];
let findIndex2 = arr1.indexOf({ name: "홍길동", hobby: "독서" });
let findIndex3 = array.indexOf(2);

console.log(findIndex3);

console.log(arr1[findIndex]);

let arr3 = [1, 20, 60, 10, 2, 6, 7];
let arr4 = ["a", "D", 60, "o", 2, 6, 7];
let arr5 = ["a", "d", "o"];

console.log(arr4.sort().toReversed());

const arr6 = ["김동진", "님", "안녕하세요", "반가워요"];
const joined = arr6.join("==");
console.log(joined);

console.log(joined.split("=="));
