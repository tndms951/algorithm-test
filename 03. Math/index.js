// 제곱근구하기
function solution(n) {
  let answer = 0;
  let aaa = Math.sqrt(n);
  aaa % 1 == 0 ? (answer = Math.pow(aaa + 1, 2)) : (answer = -1);
  return answer;
}
