// --- стрелочные функции в TypeScript ---
let getSum = (a: number, b: number): number => a + b;
let getStrings = (str: string): string[] => str.split("");
// console.log(getSum(1,"2")); // error
console.log(getSum(1, 2));

console.log();
console.log(getStrings("string"));
