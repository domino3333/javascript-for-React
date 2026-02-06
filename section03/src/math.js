//math 모듈(객체: Object, Array, Function) 세 가지가 있지만
//우리는 함수만 모듈화해 볼 것임(선언식,표현식,화살표)
// 궁금)다른 것, 오브젝트,어레이도 모듈화가 가능한지

export default function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function div(a, b) {
  return a / b;
}

console.log('math모듈 왔음')
console.log('math모듈'+add(2,6));