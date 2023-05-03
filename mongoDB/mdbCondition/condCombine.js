import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let users = client.db("test").collection("users");

  console.clear();

  // === комбинации условных операторов ===

  // ------ $gt - $lt ------
  console.log("------ >>> $gt - $lt <<< ------");
  let gt_lt = { age: { $gt: 26, $lt: 29 } };
  let res = await users.find(gt_lt).toArray();
  res.forEach((element) => {
    console.log(
      element["name"] + " - " + element["age"],
      " <- { age: { $gt: 26, $lt: 29 }"
    );
  });

  // ------ $gte - $lte ------
  console.log("------ >>> $gte - $lte <<< ------");
  let gte_lte = { age: { $gte: 26, $lte: 29 } };
  res = await users.find(gte_lte).toArray();
  res.forEach((element) => {
    console.log(
      element["name"] + " - " + element["age"],
      " <- { age: { $gte: 26, $lte: 29 }"
    );
  });

  // ------ $gte - $lte & $in ------
  console.log("------ >>> $gte - $lte & $in <<< ------");
  let gte_lte_in = {
    age: { $gte: 26, $lte: 29 },
    salary: { $in: [500] },
  };

  res = await users.find(gte_lte_in).toArray();
  res.forEach((element) => {
    console.log(
      element["name"] + " - " + element["age"] + " - " + element["salary"],
      " <- { age: { $gte: 26, $lte: 29 }, salary: { $in: [500] }"
    );
  });

  // ========== Логические операторы ===========

  // ----- $and -----
  console.log("------ >>> $and <<< ------");
  let and = { $and: [{ age: { $gte: 25 } }, { age: { $lte: 29 } }] };
  res = await users.find(and).toArray();
  res.forEach((element) => {
    console.log(
      element["name"] + " - " + element["age"],
      " <- { $and: [{ age: { $gte: 25 } }, { age: { $lte: 29 } }] }"
    );
  });

  // ----- $or -----
  console.log("------ >>> $or <<< ------");
  let or = { $or: [{ age: { $lt: 26 } }, { salary: 300 }] };
  res = await users.find(or).toArray();
  res.forEach((element) => {
    console.log(
      element["name"] + " - " + element["age"] + " - " + element["salary"],
      " <- { $or: [{ age: { $lte: 26 } }, { salary: 300 }] }"
    );
  });

  // ----- $not -----
  console.log("------ >>> $not <<< ------");
  let not = { age: { $not: { $gt: 26, $lt: 29 } } };
  res = await users.find(not).toArray();
  res.forEach((element) => {
    console.log(
      element["name"] + " - " + element["age"],
      " <- {age: {$not: {$gt: 26, $lt: 29}}}"
    );
  });
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
