// --- rest параметры в TypeScript ---
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function strSum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return __spreadArray([], rest, true).join("");
}
function numSum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    for (var index = 0; index < rest.length; index++) {
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
