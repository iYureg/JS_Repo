import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    let coll = client.db("test").collection("users");
    let res = await coll.find().toArray();
    res.forEach((element) => {
      console.log(element["name"] + " - " + element["age"]);
    });
  } finally {
    client.close();
  }
}
run().catch(console.dir);
