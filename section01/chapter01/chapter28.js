console.log(1);
console.log(2);
//setTimeout(()=>console.log(123),3000);

//setInterval(() => { console.log(2) }, 1000);
console.log(3);

//함수 선언식
/* 
function task(a, b) {
  setTimeout(() => {
    let sum = a + b;
    console.log(a + b)
  }, 3000);
}

task(10,20);
*/


//함수선언식 

// let callbackA = (sum) => {
//   console.log(`a + b=${sum}`);
// }

//이벤트처리 = 핸들러
// 3초를 기다린 후 callbackA 실행
function task(a, b, callbackA) {
  setTimeout(() => {
    let sum = a + b;
    callbackA(sum);
  }, 3000);
}


//task(10, 20, (v) => { console.log(v) });



// 1단계: 음식을 주문하는 상황
//   이벤트: 음식을 주문하면 3초 후에
//   핸들러: 음식이 완성되어 나오는 것

function orderFood(food, callback) {
  //console.log(`${food}가 주문되었습니다.`);
  setTimeout(() => {
    callback(food);
  }, 3000)
}
//orderFood("떡볶이",(food)=>{console.log(`${food}가 완성되었습니다.`)});

// 1단계: 음식을 차게 해주세요 요청하는 상황
//   이벤트: 음식을 주문하면 3초 후에
//   핸들러: 음식이 완성되어 나오는 것
function coolFood(food, callback) {
  //console.log(`${food}가 차갑게 되었습니다.`);
  setTimeout(() => {
    callback(food);
  }, 3000)
}

// coolFood("떡볶이", (food) => { console.log(`${food}가 차가워졌어요..`) })



// 1단계: 음식을 냉동 주문
function freezeFood(food, callback) {
  //console.log(`${food}가 냉동되었습니다.`);
  setTimeout(() => {
    callback(food);
  }, 3000)
}

//freezeFood("떡볶이", (food) => { console.log(`${food}가 냉동됐어요`) })



// 2단계: 떡볶이를 주문하고, 차갑도록 요청


// orderFood("떡볶이",
//   (food) => {
//     console.log(`${food}가 완성되었습니다.`)
//     coolFood(food, (food) => console.log(`${food}가 차갑게 완성`))
//   });


//3단계 떡볶이 주문 => 차게 요청 => 냉동요청
orderFood("떡볶이",
  (food) => {
    console.log(`${food}가 완성되었습니다.`)
    coolFood(food, (food) => {
      console.log(`${food}가 차갑게 완성`)
      freezeFood(food, (food) => { console.log(`${food}가 냉동됐어요`) })
    })
  });