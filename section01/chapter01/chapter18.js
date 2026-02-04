// 방법1
function returnFalse() {
  console.log("Fasle 함수");
  return false;
}
function returnTrue() {
  console.log("True 함수");
  return true;
}
console.log(returnTrue() || returnFalse());
// 방법2
function returnFalse() {
  console.log("Fasle 함수");
  return undefined;
}
function returnTrue() {
  console.log("True 함수");
  return 10;
}
console.log(returnFalse() && returnTrue());
// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
