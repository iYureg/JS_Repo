"use strict";
// -------- Типы дынных ---------
var str = "it works"; // строковый тип данных
str = "it works too";
// str = 123 ошибка, попытка записи числа в строковый тип
var num = 123; // числовой тип данных
num = 456;
// num = "goes't work";
var bool = true; // логический тип данных (два значения true или false)
bool = false;
//bool = 134; ошибка
//bool = "string";  ошибка
console.log(str, num, bool);
// ---------- Операции над данными -----------
console.log("----------------Операции над данными----------------");
var test1 = 123;
var test2 = "abc";
console.log(test1 + test2); // "123abc"
//var test3: number = test3 = test1 + test2;  ошибка - пытаемся записать строку в числовой тип
// ---------- Массивы в TypeScript ----------
console.log("----------------Массивы в TypeScript----------------");
var arr1 = ["a", "b", "c", "d", "e"]; // первый способ
var arr2 = [1, 2, 3, 4, 5]; // второй способ
console.log(arr1[0], arr2[0]);
// ---------- Объекты в TypeScript ----------
console.log("-----------------Объекты в TypeScript----------------");
var user = { name: "john", age: 30 };
// TypeScript в момент объявления, запоминает, а затем контролирует,
// тип переменной, структуру объекта и типы значений в объекте
// user = "string"; - error
// user = { name: "eric", age: 40, salary: 300 }; - error
// user = { name: "eric" }; - error
// user.name = 123; - error
// user.age = "aaa"; - error
user = { name: "eric", age: 40 };
console.log(user);
user.name = "john";
user.age = 30;
console.log(user);
// ------------ Циклы в TypeScript --------------
console.log("---------------Циклы в TypeScript--------------");
// в цикле for необходимо указывать тип для счетчика
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
// в циклах for-of и for-in тип указывать не нужно
var arr = [1, 2, 3, 4, 5];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
  var elem = arr_1[_i];
  console.log(elem);
}
var obj = { a: 1, b: 2, c: 3 };
for (var key in obj) {
  console.log(key);
}
// ------------ Функции в TypeScript --------------
console.log("----------------Функции в TypeScript-------------");
function func(a, b) {
  return a + b;
}
console.log(func(111, "333"));
function voidFn(test) {
  test = true;
  console.log(test);
}
voidFn(false);
// ------------ Кортежи в TypeScript --------------
console.log("----------------Кортежи в TypeScript-------------");
var tuple = ["john", 33];
console.log(tuple[0]);
console.log(tuple[1]);
// --------- кортежи для чтения ---------
var readOnly = ["john", 30];
// readOnly[0] = "eric"; // ошибка
// ------Необязательные элементы кортежей------
console.log("--------Необязательные элементы кортежей-------");
var user2;
user2 = ["john", 30, true];
console.log(user2);
user2 = ["eric", 32];
console.log(user2);
// ------Деструктуризация кортежей------
console.log("------------Деструктуризация кортежей-----------");
var time = [12, 59, 59];
var hour = time[0],
  min = time[1],
  sec = time[2];
console.log(time);
console.log(hour);
console.log(min);
console.log(sec);
// ------оператор rest в кортеже------
console.log("------------оператор rest в кортеже-----------");
var tpl;
tpl = ["str", 1, 2, 3];
console.log(tpl);
tpl = ["string", 1, 2, 3, 4, 5];
console.log(tpl);
//--------перечисления в TypeScript----------
console.log("===========перечисления в TypeScript===========");
var Season;
(function (Season) {
  Season[(Season["Winter"] = 0)] = "Winter";
  Season[(Season["Spring"] = 1)] = "Spring";
  Season[(Season["Summer"] = 2)] = "Summer";
  Season[(Season["Autumn"] = 3)] = "Autumn";
})(Season || (Season = {}));
var curValue = Season[0];
console.log(curValue);
var curIndex = Season.Winter;
console.log(curIndex);
//--------перечисление как тип----------
console.log("------------перечисление как тип-----------");
var current = Season.Winter; // переменная типа Season со значением 0
console.log(current);
// let current: Season = 3 // указываем номер сезона вручную
// let current: Season = 'str'; // ошибка, попытка записать данные другого типа
// let current: Season = 7; // диапозон значений не отслеживается,
//                            можно записать отсутствующий номер
//                           ошибки не будет
console.log(typeof current); // отдаст числовой тип
//--------указание ключей в перечислениях----------
console.log("------------указание ключей в перечислениях-----------");
var Week;
(function (Week) {
  Week[(Week["Monday"] = 1)] = "Monday";
  Week[(Week["Tuesday"] = 2)] = "Tuesday";
  Week[(Week["Wednesday"] = 3)] = "Wednesday";
  Week[(Week["Thursday"] = 4)] = "Thursday";
  Week[(Week["Friday"] = 5)] = "Friday";
  Week[(Week["Saturday"] = 6)] = "Saturday";
  Week[(Week["Sunday"] = 7)] = "Sunday";
})(Week || (Week = {}));
console.log(Week[3], Week.Wednesday);
// ключами могут быть и строки
var Months;
(function (Months) {
  Months["January"] = "\u042F\u043D\u0432\u0430\u0440\u044C";
  Months["February"] = "\u0424\u0435\u0432\u0440\u0430\u043B\u044C";
  Months["March"] = "\u041C\u0430\u0440\u0442";
  Months["April"] = "\u0410\u043F\u0440\u0435\u043B\u044C";
  Months["May"] = "\u041C\u0430\u0439";
  Months["June"] = "\u0418\u044E\u043D\u044C";
  Months["July"] = "\u0418\u044E\u043B\u044C";
  Months["August"] = "\u0410\u0432\u0433\u0443\u0441\u0442";
  Months["September"] = "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
  Months["October"] = "\u041E\u043A\u0442\u044F\u0431\u0440\u044C";
  Months["November"] = "\u041D\u043E\u044F\u0431\u0440\u044C";
  Months["December"] = "\u0414\u0435\u043A\u0430\u0431\u0440\u044C";
})(Months || (Months = {}));
console.log(Months["February"], Months.February);
//-------- тип any в TypeScript ----------
console.log("------------ тип any в TypeScript -----------");
// тип any, позволяющий пройти проверку значений на этапе компиляции
var anyType;
anyType = 123;
console.log(anyType);
anyType = "abc";
console.log(anyType);
var anyTypeArr = ["abc", true, 123];
console.log(anyTypeArr);
anyTypeArr[0] = false;
anyTypeArr[1] = 456;
anyTypeArr[2] = "def";
console.log(anyTypeArr);
//-------- объединение типов в TypeScript ----------
console.log("------------ объединение типов в TypeScript -----------");
var unifiTest;
unifiTest = 123;
console.log(unifiTest);
unifiTest = "abc";
console.log(unifiTest);
// unifiTest = true;  // ошибка
//-------- псевдонимы типов в TypeScript ----------
console.log("------------ псевдонимы типов в TypeScript -----------");
var pseTest = 123;
console.log(
  "\u0422\u0438\u043F strumber \u0447\u0438\u0441\u043B\u043E: ".concat(pseTest)
);
pseTest = "abc";
console.log(
  "\u0422\u0438\u043F strumber \u0441\u0442\u0440\u043E\u043A\u0430: ".concat(
    pseTest
  )
);
var unBoNuTest = true;
console.log(
  "\u0422\u0438\u043F undeBoolNull \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435: ".concat(
    unBoNuTest
  )
);
unBoNuTest = null;
console.log(
  "\u0422\u0438\u043F undeBoolNull \u043D\u0438\u0447\u0435\u0433\u043E: ".concat(
    unBoNuTest
  )
);
unBoNuTest = undefined;
console.log(
  "\u0422\u0438\u043F undeBoolNull \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E: ".concat(
    unBoNuTest
  )
);
//-------- Тип строкового литерала в TypeScript ----------
console.log("------------ Тип строкового литерала в TypeScript -----------");
// с помощью оператора объединения можно объединять не только типы, но и строки
var litStr;
// переменная будет хранить одну из трех строк
litStr = "success";
console.log(litStr);
litStr = "warning";
console.log(litStr);
litStr = "error";
console.log(litStr);
// litStr = "abc"; // ошибка
// ----- тип для объединения строк -----
console.log("-------тип для объединения строк-------");
var strMessage = "success";
console.log("Type message: " + strMessage);
// ----- Встроенные типы объектов в TypeScript -----
console.log("-------Встроенные типы объектов в TypeScript-------");
console.log("------- Date -------");
var date;
date = new Date();
console.log(date);
date = new Date(2030, 11, 31);
console.log(date);
console.log("------- RegExp -------");
var regexp;
regexp = /.+?/;
console.log(regexp);
regexp = new RegExp("[a-zA-Z]{1, 4}");
console.log(regexp);
console.log("------- DOM -------");
// let elemP: HTMLParagraphElement;
// elemp = document.querySelector("p");
// let div: HTMLDivElement;
// div = document.querySelector("div");
// console.log(typeof elemP, typeof div);
console.log("------- Collections -------");
// let lst: NodeList = document.querySelectorAll('div');
console.log("_______________________________________");
