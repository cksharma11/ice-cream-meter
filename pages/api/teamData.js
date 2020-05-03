require("dotenv").config();
import nextConnect from "next-connect";
import { MongoClient } from "mongodb";
import getConfig from "next/config";
import MongoHelper from "../../db/mongoHelper";

const { serverRuntimeConfig } = getConfig();

const handler = nextConnect();

const DB_URL = serverRuntimeConfig.DB_URL || process.env.DB_URL;
const TABLE = serverRuntimeConfig.TABLE || process.env.TABLE;
const DB_NAME = serverRuntimeConfig.DB_NAME || process.env.DB_NAME;

const databaseHelper = new MongoHelper(MongoClient, DB_URL);

handler.get(async (req, res) => {
  try {
    const { teamName } = req.cookies;

    await databaseHelper.connect(DB_NAME);
    const teamData = await databaseHelper.getTeamData(teamName, TABLE);
    await databaseHelper.connection.close();

    res.send(teamData);
  } catch (e) {
    console.log(e);
    res.end(e);
  }
});

export default handler;
