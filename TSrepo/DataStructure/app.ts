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
