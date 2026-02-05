

let task = function () {
  setTimeout(() => {
    console.log("안녕");
    if (true) {
      //resolve 상태
    } else {
      //reject 상태
    }
  }, 3000);
}

//task();

//pending 상태
/*
let promise = new Promise(() => {
  setTimeout(() => {
    console.log("안녕");
    if(true){
      //resolve 상태
    }else{
      //reject 상태
    }
  }, 3000)
});
*/

// console.log(promise);

// resolve 상태
// let promise2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log("안녕");
//     if(true){
//       resolve("promise 안녕");
//     }else{
//       //reject
//     }
//   }, 2000)
// });

// setTimeout(()=>{
//   console.log(promise2);
// },3000);



// rejected 상태
// let promise3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log("안녕3");
//     if(false){
//       resolve("promise 안녕");
//     }else{
//       reject("프로미스 실패")
//       //reject
//     }
//   }, 2000)
// });

// setTimeout(()=>{
//   console.log(promise3);
// },3000);

//4. Promise 를 실제로 활용해보자.
// const promise4 = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor
//   setTimeout(() => {
//     const num = "10";
//     if (typeof num === 'number') {
//       resolve(num + 10);
//     } else {
//       reject('num이 숫자가 아닙니다');
//     }
//   }, 2000);
// });
// setTimeout(() => {
//   console.log(promise4);
// }, 3000);


/*
//5. Promise 성공 후 결과값 출력
const promise5 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    const num = "10";
    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject('num이 숫자가 아닙니다');
    }
  }, 2000);
});

// 프로미스 성공 시 then으로 받는다
promise5.then((value)=>console.log(`성공 value =${value}`));
promise5.catch((value)=>console.log(`실패 value =${value}`));

setTimeout(() => {
  console.log(promise5);
}, 3000);
*/


//**************************************************************** */
//promise chain 방식으로 표현해보기
// const promise6= new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor
//   setTimeout(() => {
//     const num = 10;
//     if (typeof num === 'number') {
//       resolve(num + 10);
//     } else {
//       reject('num이 숫자가 아닙니다');
//     }
//   }, 2000);
// });

// promise6
//   .then((value)=>console.log(`성공 value =${value}`))
//   .catch((value)=>console.log(`실패 value =${value}`));

// setTimeout(() => {
//   console.log(promise6);
// }, 3000);


//promise 를 함수를 통해서 실행해보자
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });
  return promise;
}


// let promise = add10(100)
// promise
//   .then((value) => console.log(`성공 value =${value}`))
//   .catch((value) => console.log(`실패 value =${value}`));


//2단계
// let promise = add10("100");
// promise
//   .then((value) => {

//     console.log(`성공 value =${value}`)
//     let _promise = add10(value);
//     _promise.then((value) => {
//       console.log(value)
//     })
//   })
//   .catch((value) => console.log(`실패 value = ${value}`));

//2단계 수정
// let promise = add10(100);
// promise
//   .then((value) => {
//     console.log(`성공 value =${value}`)
//     //promise리턴
//     return add10(value);
//   })
//   .then((value)=>{ console.log(`성공결과:${value}`)})
//   .catch((value) => console.log(`실패 value = ${value}`));


//3단계
// add10(100)
//   .then((value) => {
//     console.log(`성공 value =${value}`)
//     //promise리턴
//     return add10(value);
//   })
//   .then((value2) => {
//     console.log(`성공결과:${value2}`)
//     return add10(undefined);
//   })
//   .then((value3) => console.log(value3))
//   .catch((value) => console.log(`실패 value = ${value}`));

//음식 주문사항을 1단계 2단계 3단계로 해결하기

// function orderFood(food, callback) {
//   console.log(`${food}가 주문되었습니다.`);
//   setTimeout(() => {
//     callback(food);
//   }, 3000)
// }

function orderFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food}가 주문되었습니다.`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + ` 음식 완료`)
      } else {
        reject(food + ` 음식 실패`)
      }
    }, 2000);
  });
  return promise;
}

// orderFood2("떡볶이")
//   .then((result) => { console.log(`${result}`) })
//   .catch((error)=>{console.log(`${error}`)});


//////////////////////////////////////////////////
function coolFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food}가 차갑게 주문되었습니다.`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + ` 음식 차갑게 완료`)
      } else {
        reject(food + ` 음식 차갑게 실패`)
      }
    }, 2000);
  });
  return promise;
}

// coolFood2("떡볶이")
//   .then((result) => { console.log(`${result}`) })
//   .catch((error) => { console.log(`${error}`) });

//////////////////////////////////////////////////
function freezeFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food}가 냉동 주문`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + ` 냉동 완료`)
      } else {
        reject(food + ` 냉동 실패`)
      }
    }, 2000);
  });
  return promise;
}

// freezeFood2("떡볶이")
//   .then((result) => { console.log(`${result}`) })
//   .catch((error) => { console.log(`${error}`) });


//2단계 처리 방식
// orderFood2("떡볶이")
//   .then((result) => {
//     console.log(`${result}`)
//     return coolFood2(result)
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => { console.log(`${error}`) });

//3단계 처리 방식
orderFood2("떡볶이")
  .then((value) => {
    console.log(`${value}`)
    return coolFood2("떡볶이")
  })
  .then((value) => {
    console.log(value);
    return freezeFood2("떡볶이")
  })
  .then((value) => { console.log(value) })
  .catch((error) => { console.log(`${error}`) });












