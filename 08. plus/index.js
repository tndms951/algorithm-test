//음양 더하기

function solution(absolutes, signs) {
  let answer = 0;
  console.log(signs);
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer = answer + absolutes[i];
    } else {
      answer = answer - absolutes[i];
    }
  }
  return answer;
}
console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
