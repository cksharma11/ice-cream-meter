require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";
import runWithAsyncWrapper from "../../middleware/asyncHandler";

const handler = nextConnect();
handler.use(middleware);

handler.post(
  runWithAsyncWrapper(async (req, res) => {
    const { name } = req.body;
    const { teamName } = req.cookies;

    await req.dbClient.decrimentIcecreamCount(teamName, name, TABLE);

    res.send({ error: false });
  })
);

export default handler;
