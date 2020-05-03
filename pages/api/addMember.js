require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { name } = req.body;
    const { teamName } = req.cookies;

    await req.dbClient.addMember(name, teamName, TABLE);

    res.writeHead(302, { Location: "/dashboard" });
    res.end();
  } catch (e) {
    console.log(e);
    res.end(e);
  }
});

export default handler;
