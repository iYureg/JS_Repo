"use strict";
console.log("---------- Сложные объекты в TypeScript ---------");
var myEvent = {
    name: "my new event",
    time: {
        start: "2030-11-01",
        finish: "2030-12-31"
    }
};
console.log("---------- объект myEvent через интерфейс MyEvent ---------");
console.log(myEvent.name, " - time ->", myEvent.time.start, " - ", myEvent.time.finish);
var employee = {
    name: "ivan",
    position: {
        name: "programmer",
        salary: 1000
    },
    addr: {
        country: "Russia",
        city: "Stalingrad"
    }
};
console.log("---------- объект employee через интерфейс Employee ---------");
console.log(employee.name, " - ", employee.position.name, " - ", employee.position.salary, " - ", employee.addr.city, " - ", employee.addr.country);
// Объекты в объектаъ в TypeScript
console.log("---------- объект Date внутри объекта Period ---------");
var period = {
    date1: new Date(2030, 11, 31),
    date2: new Date(2020, 11, 31)
};
console.log(period);
console.log("---------- объект City внутри объекта User ---------");
var user = {
    name: "john",
    age: 30,
    city: { name: "london" }
};
console.log("Name: " + user.name + "- Age: " + user.age + " - City: " + user.city.name);
// Массивы объектов в TypeScript
console.log("---------- Массив объектов с юзерами ---------");
var users = [];
users.push({ name: "john", age: 33, city: { name: "london" } });
users.push({ name: "eric", age: 22, city: { name: "manchester" } });
console.log(users);
// users.forEach((el) => {
//   console.log(el["name"], " - ", el["city"].name);
// });
console.log("---------- Массив объектов с датами ---------");
var arr = [];
arr.push(new Date(2030, 11, 31));
arr.push(new Date(2020, 11, 31));
console.log(arr);
