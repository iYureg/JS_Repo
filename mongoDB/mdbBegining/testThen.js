import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

client.connect();

let coll = client.db("test").collection("users");
coll
  .find()
  .toArray()
  .then((res) => {
    res.forEach((field) => {
      console.log(field["name"] + " - " + field["age"]);
    });
    client.close();
  })
  .catch((err) => console.log(err));
