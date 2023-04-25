import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let coll = client.db("test").collection("users");
  let fltrRes = await coll.find({ salary: 500, age: 26 }).toArray();

  console.log(fltrRes); // все юзеры с зарплатой 500 и возрастом 26

  fltrRes.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
