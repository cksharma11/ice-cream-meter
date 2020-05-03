require("dotenv").config();
import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
import MongoHelper from "../db/mongoHelper";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const DB_URL = serverRuntimeConfig.DB_URL || process.env.DB_URL;
const DB_NAME = serverRuntimeConfig.DB_NAME || process.env.DB_NAME;
const TABLE = serverRuntimeConfig.TABLE || process.env.TABLE;

const client = new MongoHelper(MongoClient, DB_URL);

async function database(req, res, next) {
  await client.connect(DB_NAME);
  req.dbClient = client;
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
export { TABLE };
