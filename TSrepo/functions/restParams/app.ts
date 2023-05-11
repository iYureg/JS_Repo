// --- rest параметры в TypeScript ---

function strSum(...rest: any[]): string {
  return [...rest].join("");
}

function numSum(...rest: number[]): number {
  let sum = 0;
  for (let index = 0; index < rest.length; index++) {
    sum += rest[index];
  }
  return sum;
}

console.log(strSum("a"));
console.log(strSum("a", "b"));
console.log(strSum("a", "b", "c"));
console.log(strSum("a", "b", "c", 1, 2, 3));

console.log(numSum(1));
console.log(numSum(1, 2));
console.log(numSum(1, 2, 3));
