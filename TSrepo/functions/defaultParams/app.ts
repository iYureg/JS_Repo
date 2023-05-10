// параметры по умолчанию

function getString(name: string, surn: string = "snow") {
  return name + " " + surn;
}

function getPower(num: number, pow: number = 2) {
  return Math.pow(num, pow);
}

console.log(getString("john", "smith"));
console.log(getString("john"));
console.log("_________________");

console.log("3^2 =", getPower(3));
console.log("3^3 =", getPower(3, 3));
