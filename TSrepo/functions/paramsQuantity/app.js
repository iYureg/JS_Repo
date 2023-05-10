// ---- количество параметров функции ----
function func(name, surn) {
    return name + " " + surn;
}
// func("ivan"); // error, мало параметров
// func("ivan","ivanovich","ivanov"); // error, много параметров
console.log(func("ivan", "ivanov"));
function sum(num1, num2) {
    return num1 + num2;
}
// sum(1);
// sum(1,2,3);
console.log(sum(1, 2));
