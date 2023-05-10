// параметры по умолчанию
function getString(name, surn) {
    if (surn === void 0) { surn = "snow"; }
    return name + " " + surn;
}
function getPower(num, pow) {
    if (pow === void 0) { pow = 2; }
    return Math.pow(num, pow);
}
console.log(getString("john", "smith"));
console.log(getString("john"));
console.log("_________________");
console.log("3^2 =", getPower(3));
console.log("3^3 =", getPower(3, 3));
