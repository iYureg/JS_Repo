import { MongoClient } from "mongodb";
import prds from "../mdbBegining/data/insert.js";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let prodsColl = client.db("test").collection("prods");

  // ------- method insertOne -------
  //   await prodsColl.insertOne({ name: "test", cost: 300, rest: 30 });

  // --------- method insertMany ---------
  //await prodsColl.insertMany(prds);

  let res = await prodsColl.find().toArray();
  console.log(res);
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
