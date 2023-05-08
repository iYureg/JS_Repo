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

// --- users.hbs collection users
app.get("/users", async function (req, res) {
  let users = await client.db("test").collection("users").find().toArray();
  res.render("users", { users: users });
});

app.get("/prod/show/:name", async function (req, res) {
  /*
    http://localhost:3000/prod/show/prod1
                                    prod2
                                    prod3
 */
  let name = req.params.name;
  let prod = await client
    .db("test")
    .collection("prods")
    .findOne({ name: name });

  !prod
    ? res.render("404", { data: "not found" })
    : res.render("prod", { prod: prod });
});
// --- prods.hbs collection prods ---
app.get("/prods", async function (req, res) {
  let prods = await client.db("test").collection("prods").find().toArray();
  res.render("prods", { prods: prods });
});

// --- delete prod ---
app.get("/prod/delete/:name", async (req, res) => {
  let name = req.params.name;
  let prod = await client
    .db("test")
    .collection("prods")
    .deleteOne({ name: name });
  res.render("message", { data: "successfully deleted" });
});
app.use((req, res) =>
  res.status(404).render("404", { data: "page not found" })
);
app.listen(3000, () => console.log("localhost:3000 running..."));
