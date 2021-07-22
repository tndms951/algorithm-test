// function solution(n) {
//   let aaa = String(n).split("");
//   let bbb = aaa.map((list) => Number(list));
//   let b = 0;
//   for (let i = 0; i < bbb.length; i++) {
//     b = b + bbb[i];
//   }
//   return b;
// }
// console.log(solution(345));

// reduce함수를 사용해서 간략하게 코드 변경
function solution(n) {
  let aaa = String(n).split("");
  let bbb = aaa.map((list) => Number(list));

  return bbb.reduce((a, b) => a + b, 0);
}
console.log(solution(345));
