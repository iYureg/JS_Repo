// --- коллбэки в TypeScript ---

function make(num: number, func: (num: number) => number): number {
  return func(num);
}

type Func = (num: number) => number;

function make2(arr: number[], func2: Func): number {
  let sum = 0;

  for (let elem of arr) {
    sum += func2(elem);
  }

  return sum;
}

let res: number = make2([1, 2, 3], function (num): number {
  return num ** 2;
});

console.log(res);
console.log("__________________");

console.log(
  make(3, function (num) {
    return num ** 2;
  })
);
console.log(
  make(3, function (num) {
    return num ** 3;
  })
);
