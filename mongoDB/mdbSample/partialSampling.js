import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let users = client.db("test").collection("users");

  console.clear();

  // --- method limit ---
  console.log("--->>> limit <<<---");
  let limit = await users.find().limit(3).toArray();
  limit.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });

  // --- method skip ---
  console.log("--->>> skip <<<---");
  let skip = await users.find().skip(3).toArray();
  skip.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });

  // --- skip/limit ---
  console.log("--->>> skip/limit <<<---");
  let skipLimit = await users.find().skip(1).limit(3).toArray();
  skipLimit.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });

  // --- sort/skip/limit ---
  console.log("-->>> sort/skip/limit <<<--");
  let sortSkipLimit = await users
    .find()
    .sort({ age: -1 })
    .skip(1)
    .limit(3)
    .toArray();
  sortSkipLimit.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
