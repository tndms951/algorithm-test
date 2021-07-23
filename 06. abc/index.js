//정수 내림차순으로 배치하기
function solution(n) {
  let aaa = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(aaa);
}
console.log(solution(118372));

// 다른 풀이 코드
// function solution(n) {
//   let aaa = String(n).split("");
//   console.log(aaa);
//   aaa.sort((a, b) => b - a);
//   let bbb = aaa.join("");
//   let ccc = Number(bbb);

//   return ccc;
// }
// console.log(solution(118372));
