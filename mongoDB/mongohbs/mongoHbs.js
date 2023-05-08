import expressHandlebars from "express-handlebars";
import express from "express";
import { MongoClient } from "mongodb";

const handlebars = expressHandlebars.create({
  defaultLayout: "main",
  extname: "hbs",
});

let app = express();
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

const uri = "mongodb://localhost:27017";
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

  !user
    ? res.render("404", { data: "not found" })
    : res.render("user", { user: user });
});

// --- prods.hbs collection prods ---
app.get("/prods", async function (req, res) {
  let prods = await client.db("test").collection("prods").find().toArray();
  res.render("prods", { prods: prods });
});
app.use((req, res) =>
  res.status(404).render("404", { data: "page not found" })
);
app.listen(3000, () => console.log("localhost:3000 running..."));
