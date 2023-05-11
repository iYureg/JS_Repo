// --- коллбэки в TypeScript ---
function make(num, func) {
    return func(num);
}
function make2(arr, func2) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        sum += func2(elem);
    }
    return sum;
}
var res = make2([1, 2, 3], function (num) {
    return Math.pow(num, 2);
});
console.log(res);
console.log("__________________");
console.log(make(3, function (num) {
    return Math.pow(num, 2);
}));
console.log(make(3, function (num) {
    return Math.pow(num, 3);
}));
