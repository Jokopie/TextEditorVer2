import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  try{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const email = url.searchParams.get('email');
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    const collection = db.collection('notes');
    const files = await collection.find({ email }).toArray();
    client.close();
    return NextResponse.json(files,{ status: 200 });
  }
  catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json({ error: 'Failed to fetch files' }, { status: 500 });
  }
}
