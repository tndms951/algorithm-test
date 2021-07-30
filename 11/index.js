// function solution(s) {
//   var answer = true;
//   const arr = s.split("");

//   console.log(arr);
//   return answer;
// }
// console.log(solution("pPoooyY"));
// console.log(solution("Pyy"));

function aaa() {
  var arr = [1, "a", "b", 2];
  var abcd = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr.splice(arr[i], "");
    abcd.push([i]);
  }
  return abcd;
}
console.log(aaa());
