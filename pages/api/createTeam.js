require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";
import runWithAsyncWrapper from "../../middleware/asyncHandler";

const handler = nextConnect();
handler.use(middleware);

handler.post(
  runWithAsyncWrapper(async (req, res) => {
    const { teamName, password } = req.body;

    await req.dbClient.createTeam(teamName, password, TABLE);

    res.writeHead(302, { Location: "/logInTeam" });
    res.end();
  })
);

export default handler;
