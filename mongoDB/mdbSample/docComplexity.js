import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();

  let usersLoc = client.db("test").collection("usersLocation");
  console.clear();

  // --- collection usersLocation ---
  console.log("------ collection usersLocation ------");
  let cond1 = { "addr.country": "Britain" };
  let fromBrit = await usersLoc.find(cond1).toArray();

  fromBrit.forEach((el) => {
    console.log(el["name"] + " - " + el["addr"].city);
  });

  // --- collection employees ---
  let employees = client.db("test").collection("employees");

  console.log("--- collection employees ---");
  let cond2 = { "employee.addr.country": "Britain" };
  let empsFromBrit = await employees.find(cond2).toArray();
  empsFromBrit.forEach((el) => {
    console.log(el["employee"].name + " - " + el["employee"].addr.city);
  });

  // --- collection employees ---
  let usersLang = client.db("test").collection("usersLanguages");

  console.log("--- collection usersLanguages ---");
  let cond3 = { langs: "english" };
  let engUser = await usersLang.find(cond3).toArray();
  engUser.forEach((el) => {
    console.log(el["name"] + " - " + el["langs"]);
  });

  // --- collection clothes ---
  let clothes = client.db("test").collection("clothes");

  // --- method $all ---
  console.log("--- collection clothes / $all ---");
  let allBlack = { colors: { $all: ["black"] } };
  let result = await clothes.find(allBlack).toArray();
  result.forEach((el) => {
    console.log(el["name"] + " - " + el["colors"]);
  });

  // --- method $size ---
  console.log("--- collection clothes / $size ---");
  let sizeCond = { colors: { $size: 3 } };
  let sizeRes = await clothes.find(sizeCond).toArray();
  sizeRes.forEach((el) => {
    console.log(el["name"] + " - " + el["colors"]);
  });

  // --- method $elemMatch ---
  console.log("--- collection clothes / $elemMatch ---");
  let sizeElemMatch = { sizes: { $elemMatch: { $gt: 3, $lt: 5 } } };
  let elemMatchRes = await clothes.find(sizeElemMatch).toArray();
  elemMatchRes.forEach((el) => {
    console.log(el["name"] + " - " + el["sizes"]);
  });
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
