require("dotenv").config();

//Server Side only
export default function getBaseURL() {
  const protocol = process.env.SERVER_PROTOCOL;
  const host = process.env.SERVER_HOST;
  const port = process.env.SERVER_PORT;

  const url = `${protocol}://${host}${port ? `:${port}` : ""}`;
  return url;
}
