require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const { name } = req.body;
    const { teamName } = req.cookies;

    await req.dbClient.incrementIcecreamCount(teamName, name, TABLE);

    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.send({ success: false });
  }
});

export default handler;
