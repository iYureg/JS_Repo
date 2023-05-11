// --- Тип функции в TypeScript ---

let func: (x: number, y: number) => number;

func = function (a, b) {
  return a + b;
};

// console.log(func(1,"2")); // error
console.log(func(1, 2));

// ======== type ========
type Func = (x: string, y: string) => string;

let getString: Func = (a, b) => a + " " + b;

console.log("_____________");
// console.log(getString(1, "smith")); // error
console.log(getString("john", "smith"));
