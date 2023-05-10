// необязательные параметры функций

function getString(name: string, surn?: string) {
  if (surn) return name + " " + surn;
  else return name;
}

function getDay(year?: number, month?: number, date?: number) {
  !year ? (year = new Date().getFullYear()) : null;
  !month ? (month = new Date().getMonth()) : null;
  !date ? (date = new Date().getDate()) : null;

  let day = new Date(year, month, date).getDay();
  let week: string[] = ["su", "mo", "tu", "we", "th", "fr", "sat"];
  return week[day];
}

console.log(getString("john"));
console.log(getString("john", "smit"));
console.log(getString("______________"));
console.log(getDay());
console.log(getDay(2020));
console.log(getDay(2021, 11));
console.log(getDay(2023, 10, 25));
