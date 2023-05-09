import expressHandlebars from "express-handlebars";
import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";

const handlebars = expressHandlebars.create({
  defaultLayout: "main",
  extname: "hbs",
});

let app = express();
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

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

// --------- insertOne User ----------
app.get("/user/add", (req, res) => {
  res.render("addUser");
});
app.post("/user/add", async (req, res) => {
  let user = req.body;
  await client.db("test").collection("users").insertOne(user);

  res.render("message", { data: "user successfully added" });
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
// --- delete user ---
app.get("/user/delete/:name", async (req, res) => {
  let name = req.params.name;
  await client.db("test").collection("users").deleteOne({ name: name });
  res.render("message", { data: "user successfully deleted" });
});

// ========= Products =========
// --------- insertOne Prod ----------
app.get("/prod/add", (req, res) => {
  res.render("addProd");
});
app.post("/prod/add", async (req, res) => {
  let prod = req.body;
  await client.db("test").collection("prods").insertOne(prod);

  res.render("message", { data: "prod successfully added" });
});

// ---- findOne prod -----
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
  await client.db("test").collection("prods").deleteOne({ name: name });
  res.render("message", { data: "prod successfully deleted" });
});

app.use((req, res) =>
  res.status(404).render("404", { data: "page not found" })
);
app.listen(3000, () => console.log("localhost:3000 running..."));
