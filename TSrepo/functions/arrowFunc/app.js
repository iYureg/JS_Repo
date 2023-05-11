// --- стрелочные функции в TypeScript ---
var getSum = function (a, b) { return a + b; };
var getStrings = function (str) { return str.split(""); };
// console.log(getSum(1,"2")); // error
console.log(getSum(1, 2));
console.log();
console.log(getStrings("string"));
