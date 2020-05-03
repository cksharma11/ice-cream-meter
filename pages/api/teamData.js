require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { teamName } = req.body;
    const teamData = await req.dbClient.getTeamData(teamName, TABLE);
    res.send(teamData);
  } catch (e) {
    console.log(e);
    res.end(e);
  }
});

export default handler;
