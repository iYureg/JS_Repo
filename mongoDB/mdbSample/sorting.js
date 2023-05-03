import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let users = client.db("test").collection("users");

  console.clear();
  // ====== sort() =====
  console.log("------- sort({ field: 1 }) -------");
  let sort1 = await users.find().sort({ age: 1 }).toArray();
  sort1.forEach((el) => {
    console.log(el["name"] + " - " + el["age"]);
  });

  // ---------------------
  console.log("------- sort({ field: -1 }) -------");
  let sort_1 = await users.find().sort({ age: -1 }).toArray();
  sort_1.forEach((el) => {
    console.log(el["name"] + " - " + el["age"]);
  });

  // ---------------------
  console.log("------- sort({ age: 1, salary: -1 }) -------");
  let age1Salary_1 = await users.find().sort({ age: 1, salary: -1 }).toArray();
  age1Salary_1.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });

  // ------ $natural ------
  console.log("------- sort({ $natural: -1 }) -------");
  let natural = await users.find().sort({ $natural: -1 }).toArray();
  natural.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
