import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let prodsColl = client.db("test").collection("prods");

  //-------- method deleteOne --------
  await prodsColl.deleteOne({ cost: 400 });
  await prodsColl.deleteOne({ name: "test" });
  // await prodsColl.deleteOne();  // первый документ в коллекции

  //-------- method deleteMany ---------
  await prodsColl.deleteMany({ cost: 500 });

  //-------- method findOneAnddelete ---------
  //   let deleted = await prodsColl.findOneAndDelete({ name: "prod2" }); // удаляем и возвращает первый документ
  //   console.log(deleted);

  //-------- method drop ---------
  let cats = client.db("test").collection("categories");
  await cats.drop(); // удаляем все документы из коллекции categories

  let res = await prodsColl.find().toArray();
  console.log(res);
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
