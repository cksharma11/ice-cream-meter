require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { teamName, password } = req.body;

    await req.dbClient.createTeam(teamName, password, TABLE);

    res.setHeader("Set-Cookie", [`teamName=${teamName};path=/`]);
    res.writeHead(302, { Location: "/dashboard" });
    res.end();
  } catch (e) {
    console.log(e);
    res.end(e);
  }
});

export default handler;
