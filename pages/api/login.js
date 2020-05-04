require("dotenv").config();
import nextConnect from "next-connect";
import middleware, { TABLE } from "../../middleware/dbConnnection";
import runWithAsyncWrapper from "../../middleware/asyncHandler";

const handler = nextConnect();
handler.use(middleware);

handler.post(
  runWithAsyncWrapper(async (req, res) => {
    const { teamName, password } = req.body;

    const result = await req.dbClient.verifyLoginDetails(
      teamName,
      password,
      TABLE
    );

    if (result.length == 0) {
      return res.send({
        error: true,
        message: "TEAM NAME OR PASSWORD INCORRECT",
      });
    }

    res.setHeader("Set-Cookie", [`teamName=${teamName};path=/`]);
    res.writeHead(302, { Location: "/dashboard" });
    res.end();
  })
);

export default handler;
