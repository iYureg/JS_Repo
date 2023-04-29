import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let prods = client.db("test").collection("prods");

  // -------- method updateOne --------
  // обновляет первый документ с ценой 300
  //await prods.updateOne({ cost: 300 }, { $set: { cost: 900 } });

  // -------- method updateMany --------
  // все документы в коллекции prods
  //   await prods.updateMany({}, { $set: { cost: 1000 } });
  //   await prods.updateMany({}, { $set: { cost: 300, rest: 10 } });

  // -------- method findOneAndUpdate --------
  // возвращает и обновляет первый документ по фильтру/без фильтра
  let showProd = await prods.findOneAndUpdate(
    {},
    { $set: { touch: new Date() } }
  );
  console.log(showProd);

  let res = await prods.find().toArray();
  console.log(res);
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
