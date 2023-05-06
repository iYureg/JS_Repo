import { MongoClient } from "mongodb";
import express from "express";
const uri = "mongodb://localhost:27017";
let app = express();

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

client.connect(async (error, mongo) => {
  if (!error) {
    console.log("connected mongo");
  } else {
    console.log(error);
  }
});

// --- findOne ---
app.get("/user/show/:name", async function (req, res) {
  /*
    http://localhost:3000/user/show/user1
                                    user2
                                    user3
 */
  let name = req.params.name;
  let user = await client
    .db("test")
    .collection("users")
    .findOne({ name: name });

  res.send("name: " + user.name + " salary: " + user.salary);
});

app.use((req, res) => res.status(404).send("not found")); //--- в use попадают несуществующие маршруты
app.listen(3000, () => console.log("localhost:3000 running..."));
