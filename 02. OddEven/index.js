//짝수와홀수
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(solution(3));

// 다른풀이 방법
// function solution(num) {
//   let limit = 2;
//   if (num % limit === 0) {
//     return "짝수";
//   } else {
//     return "홀수";
//   }
// }
// console.log(solution(4));
