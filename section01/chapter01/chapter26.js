//1. 스프레드 연산자

let array1 = [1,2,3,4,5];
let array2 = [10,...array1,20,30]
let array3 = array1;

let array4 =[...array1];

// console.log(array5 === array1);

// 2. Spread 연산자(객체)
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c:4,
  d:5
}

// console.log(obj2);

// arr1 = [1, 2, 3];
// function funcB(one, ...ds) {
//  console.log(ds); //[2, 3] 출력
// }
// funcB('a','A','b');

//


const array7 = [11,12,13];
function funC(p1, ...rest){
  console.log(p1);
  console.log(rest)
}
funC(...array7);





