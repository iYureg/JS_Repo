import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

try {
  client.connect();
  let users = client.db("test").collection("users");

  console.clear();
  // --- $lt ---
  console.log(" ---------  >>>  $lt  <<<  --------");
  let lt = { age: { $lt: 27 } }; // все документы с полем age < 27
  let res = await users.find(lt).toArray();
  res.forEach((el) => {
    console.log(el["name"] + " - " + el["age"], " <- { age: { $lt : 27 }}");
  });

  // --- $gt ---
  console.log(" ---------  >>>  $gt  <<<  --------");
  let gt = { age: { $gt: 26 } }; // все документы с полем age > 26
  res = await users.find(gt).toArray();
  res.forEach((el) => {
    console.log(el["name"] + " - " + el["age"], " <- { age: { $gt : 26 }}");
  });

  // --- $lte ---
  console.log(" ---------  >>>  $lte  <<<  --------");
  let lte = { age: { $lte: 27 } }; // все документы с полем age <= 27
  res = await users.find(lte).toArray();
  res.forEach((el) => {
    console.log(el["name"] + " - " + el["age"], " <- { age: { $lte : 27 }}");
  });

  // --- $gte ---
  console.log(" ---------  >>>  $gte  <<<  --------");
  let gte = { age: { $gte: 26 } }; // все документы с полем age >= 26
  res = await users.find(gte).toArray();
  res.forEach((el) => {
    console.log(el["name"] + " - " + el["age"], " <- { age: { $gte : 26 }}");
  });

  // --- $eq ---
  console.log(" ---------  >>>  $eq  <<<  --------");
  let eq = { age: { $eq: 25 } }; // все документы с полем age == 25
  res = await users.find(eq).toArray();
  res.forEach((el) => {
    console.log(el["name"] + " - " + el["age"], " <- { age: { $eq : 25 }}");
  });

  // --- $ne ---
  console.log(" ---------  >>>  $ne  <<<  --------");
  let ne = { age: { $ne: 25 } }; // все документы с полем age != 25
  res = await users.find(ne).toArray();
  res.forEach((el) => {
    console.log(el["name"] + " - " + el["age"], " <- { age: { $ne : 25 }}");
  });

  // --- $in ---
  console.log(" ---------  >>>  $in  <<<  --------");
  let _in = { age: { $in: [25, 26] } }; // все документы с полем age == 25 && age == 26
  res = await users.find(_in).toArray();
  res.forEach((el) => {
    console.log(
      el["name"] + " - " + el["age"],
      " <- { age: { $in : [25, 26] }}"
    );
  });

  // --- $nin ---
  console.log(" ---------  >>>  $nin  <<<  --------");
  let _nin = { age: { $nin: [25, 26] } }; // все документы с полем age != 25 && age != 26
  res = await users.find(_nin).toArray();
  res.forEach((el) => {
    console.log(
      el["name"] + " - " + el["age"],
      " <- { age: { $nin : [25, 26] }}"
    );
  });

  // --- whith update ---
  let cond = { age: { $gt: 26 } };
  let data = { $set: { status: "banned" } };
  await users.updateMany(cond, data);
  res = await users.find({ status: "banned" }).toArray();
  console.log(res);
} catch (error) {
  console.log(error);
} finally {
  client.close();
}
