//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const aaa = [];

  for (let i = 0; i < arr.length; i++) {
    let arrNumber = arr[i] % divisor;
    if (arrNumber === 0) {
      aaa.push(arr[i]);
    }
  }

  return aaa.length === 0 ? [-1] : aaa.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
