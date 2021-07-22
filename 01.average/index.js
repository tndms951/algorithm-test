//답1
function solution(arr) {
  let limit = 0;
  for (let i = 0; i < arr.length; i++) {
    limit = limit + arr[i];
  }
  return limit / arr.length;
}
console.log(solution([1, 2, 3, 4]));

//답2
function solution2(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
solution2([1, 2, 3, 4]);
