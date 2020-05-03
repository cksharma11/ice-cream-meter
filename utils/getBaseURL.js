require("dotenv").config();

//Server Side only
export default function getBaseURL() {
  const protocol = process.env.SERVER_PROTOCOL;
  const host = process.env.SERVER_HOST;
  const port = process.env.SERVER_PORT;

  return `${protocol}://${host}:${port}`;
}
