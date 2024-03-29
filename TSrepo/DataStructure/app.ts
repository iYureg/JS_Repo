"use strict";

console.log("---------- Сложные объекты в TypeScript ---------");
// объекты могут быть любой сложности
interface MyEvent {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}

let myEvent: MyEvent = {
  name: "my new event",
  time: {
    start: "2030-11-01",
    finish: "2030-12-31",
  },
};
console.log("---------- объект myEvent через интерфейс MyEvent ---------");
console.log(
  myEvent.name,
  " - time ->",
  myEvent.time.start,
  " - ",
  myEvent.time.finish
);

interface Employee {
  name: string;
  position: {
    name: string;
    salary: number;
  };
  addr: {
    country: string;
    city: string;
  };
}
let employee: Employee = {
  name: "ivan",
  position: {
    name: "programmer",
    salary: 1000,
  },
  addr: {
    country: "Russia",
    city: "Stalingrad",
  },
};
console.log("---------- объект employee через интерфейс Employee ---------");
console.log(
  employee.name,
  " - ",
  employee.position.name,
  " - ",
  employee.position.salary,
  " - ",
  employee.addr.city,
  " - ",
  employee.addr.country
);

// Объекты в объектаъ в TypeScript
console.log("---------- объект Date внутри объекта Period ---------");
interface Period {
  date1: Date;
  date2: Date;
}
let period: Period = {
  date1: new Date(2030, 11, 31),
  date2: new Date(2020, 11, 31),
};
console.log(period);

console.log("---------- объект City внутри объекта User ---------");
interface City {
  name: string;
}

interface User {
  name: string;
  age: number;
  city: City;
}
let user: User = {
  name: "john",
  age: 30,
  city: { name: "london" },
};

console.log(
  "Name: " + user.name + "- Age: " + user.age + " - City: " + user.city.name
);

// Массивы объектов в TypeScript
console.log("---------- Массив объектов с юзерами ---------");
let users: User[] = [];
users.push({ name: "john", age: 33, city: { name: "london" } });
users.push({ name: "eric", age: 22, city: { name: "manchester" } });
console.log(users);
// users.forEach((el) => {
//   console.log(el["name"], " - ", el["city"].name);
// });

console.log("---------- Массив объектов с датами ---------");
let arr: Date[] = [];
arr.push(new Date(2030, 11, 31));
arr.push(new Date(2020, 11, 31));
console.log(arr);

// массив объектов с DOM елементами
// let lst: NodeList = document.querySelectorAll("div");
// let arr: HTMLElement[] = Array.from(lst);
