require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";
import runWithAsyncWrapper from "../../middleware/asyncHandler";

const handler = nextConnect();
handler.use(middleware);

handler.post(
  runWithAsyncWrapper(async (req, res) => {
    const { teamName } = req.body;
    const teamData = await req.dbClient.getTeamData(teamName, TABLE);
    res.send(teamData);
  })
);

export default handler;
