import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    console.log("Can go here")
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const collection = db.collection('notes');
  const files = await collection.find({ email: req.query.gmail }).toArray();
  console.log(files);
  client.close();
  res.status(200).json(files);
}
