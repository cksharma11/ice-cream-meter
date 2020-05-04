import nextConnect from "next-connect";
const { serverRuntimeConfig } = getConfig();
import getConfig from "next/config";

const handler = nextConnect();

handler.get(async (req, res) => {
  const DB_URL = serverRuntimeConfig.DB_URL || process.env.DB_URL;
  const DB_NAME = serverRuntimeConfig.DB_NAME || process.env.DB_NAME;
  const TABLE = serverRuntimeConfig.TABLE || process.env.TABLE;

  const DB_URL1 = process.env.DB_URL;
  const DB_NAME1 = process.env.DB_NAME;
  const TABLE1 = process.env.TABLE;

  res.send({ DB_URL, DB_NAME, TABLE, DB_NAME1, DB_URL1, TABLE1 });
});

export default handler;
