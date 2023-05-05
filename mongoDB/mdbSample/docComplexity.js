import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();

  let usersLoc = client.db("test").collection("usersLocation");
  console.clear();

  // --- collection usersLocation ---
  console.log("------ collection usersLocation ------");
  let cond1 = { "addr.country": "Britain" };
  let fromBrit = await usersLoc.find(cond1).toArray();

  fromBrit.forEach((el) => {
    console.log(el["name"] + " - " + el["addr"].city);
  });

  // --- collection employees ---
  let employees = client.db("test").collection("employees");

  console.log("--- collection employees ---");
  let cond2 = { "employee.addr.country": "Britain" };
  let empsFromBrit = await employees.find(cond2).toArray();
  empsFromBrit.forEach((el) => {
    console.log(el["employee"].name + " - " + el["employee"].addr.city);
  });
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
