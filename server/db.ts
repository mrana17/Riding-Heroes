import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type OrderDoc = {
  id: number;
  name: string;
  surname: string;
  address: {
    street: string;
    number: number;
    plz: number;
    city: string;
  };
  order: string;
};

let client = null;
let db = null;

const url = process.env.MONGODB_URI;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "RidingHeroes");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectionName) {
  return await db.collection(collectionName);
}

export async function orderList(collectionName) {
  return await db.collection(collectionName).find().toArray();
}

export async function usersList(collectionName) {
  return await db.collection(collectionName).find().toArray();
}

export async function createOrderDoc(orderDoc: OrderDoc) {
  const orderCollection = await getCollection("Orders");
  return await orderCollection.insertOne(orderDoc);
}

export async function createUserDoc(orderDoc: OrderDoc) {
  const orderCollection = await getCollection("Users");
  return await orderCollection.insertOne(orderDoc);
}

export async function readOrderDoc(surname) {
  const orderCollection = await getCollection("Orders");
  return await orderCollection.findOne({ name: surname });
}
export async function readUserDoc(username) {
  const orderCollection = await getCollection("Orders");
  return await orderCollection.findOne({ name: username });
}

export function closeDB() {
  client.close();
}
