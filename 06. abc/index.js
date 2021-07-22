function solution(n) {
  let aaa = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");

  // console.log(aaa);
  // aaa.sort((a, b) => b - a);
  // let bbb = aaa.join("");
  // let ccc = Number(bbb);

  return Number(aaa);
}
console.log(solution(118372));
