//자연수 뒤집어 배열로 만들기
function solution(n) {
  let aaa = String(n).split("");
  aaa.reverse(n);
  bbb = aaa.map((list) => Number(list));
  return bbb;
}
console.log(solution(12345));
