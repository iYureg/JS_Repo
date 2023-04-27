import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();

  // ------ method find -------
  let coll = client.db("test").collection("users");
  let fltrRes = await coll.find({ salary: 500, age: 26 }).toArray();

  console.log(fltrRes); // все юзеры с зарплатой 500 и возрастом 26

  fltrRes.forEach((el) => {
    console.log(el["name"] + " - " + el["age"] + " - " + el["salary"]);
  });

  // ------ method findOne -------
  let prodsColl = client.db("test").collection("prods");
  let findOneRes = await prodsColl.findOne({ cost: 300 }); // вернет первый документ с ценой 300
  // без фильтра метод findOne вернет первый документ в коллекции
  console.log(findOneRes["name"] + " - " + findOneRes["cost"]);

  // ----------- method count ----------
  let countProds = await prodsColl.count(); // кол-во документов в коллекции prods
  console.log(countProds, " <- количество документов в коллекции prods");

  let countWithFilter = await prodsColl.count({ cost: 500 }); // кол-во документов по фильтру
  console.log(countWithFilter, " <- количество продуктов с ценой 500");

  // ---------- method project ----------
  let proj1 = await prodsColl.find().project({ name: 1, cost: 1 }).toArray();

  // поле _id нужно явно исключать из проекции
  let proj2 = await prodsColl.find().project({ _id: 0 }).toArray();
  //   console.log(proj1);
  //   console.log(proj2);

  // ---------- method distinct ----------
  let costsSet = await prodsColl.distinct("cost");
  console.log(costsSet); // массив уникальных значений из поля cost
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
