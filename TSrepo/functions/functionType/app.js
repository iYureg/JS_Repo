// --- Тип функции в TypeScript ---
var func;
func = function (a, b) {
    return a + b;
};
// console.log(func(1,"2")); // error
console.log(func(1, 2));
var getString = function (a, b) { return a + b; };
console.log("_____________");
// console.log(getString(1, "smith")); // error
console.log(getString("john", "smith"));
