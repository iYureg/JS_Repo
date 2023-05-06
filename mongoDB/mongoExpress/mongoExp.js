import { MongoClient } from "mongodb";
import express from "express";
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

let app = express();

app.get("/users", async function (req, res) {
  try {
    client.connect();
    let db = client.db("test");
    let coll = db.collection("users");
    let users = await coll.find().toArray();

    let result = "<div>";

    for (let elem of users) {
      result +=
        "<p><b>" +
        elem["name"] +
        " - " +
        elem["age"] +
        " - " +
        elem["salary"] +
        "</b></p>";
    }

    result += "</div>";

    res.send(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

app.use((req, res) => res.status(404).send("not found")); //--- в use попадают несуществующие маршруты
app.listen(3000, () => console.log("running"));
