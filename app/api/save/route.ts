import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI!);
export async function POST(request: Request) {
  try {
    await client.connect();
    const db = client.db('Docs_Project');
    const collection = db.collection('notes');
    const data = await request.json();
    // console.log("Data in route: ",data);
    if (Array.isArray(data)) {
      await collection.insertMany(data);
    } else {
      await collection.insertOne(data);
    }
    return NextResponse.json({ message: 'Data saved successfully' });
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
  } 
  finally {
    await client.close();
  }
}
