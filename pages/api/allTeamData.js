require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";
import runWithAsyncWrapper from "../../middleware/asyncHandler";

const handler = nextConnect();
handler.use(middleware);

handler.post(
  runWithAsyncWrapper(async (req, res) => {
    const data = await req.dbClient.getAllTeamData(TABLE);
    res.send(data);
  })
);

export default handler;
