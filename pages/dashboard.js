import Dashboard from "../components/Dashboard/Dashboard";
import { getBaseURL } from "../utils/getBaseUrl";
import getCookie from "../utils/getCookie";
import { httpPOST } from "../httpClient/httpClient";

export default function Index({ data }) {
  return <Dashboard data={data} />;
}

export async function getServerSideProps(_ctx) {
  const teamName = getCookie(_ctx.req.headers.cookie, "teamName");

  const res = await httpPOST(`${getBaseURL()}/api/teamData`, { teamName });

  const data = res.members;

  return { props: { data } };
}
