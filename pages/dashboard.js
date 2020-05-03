import Dashboard from "../components/Dashboard/Dashboard";
import getBaseURL from "../utils/getBaseURL";
import getCookie from "../utils/getCookie";
import { httpPOST } from "../httpClient/httpClient";

export default function Index({ data, teamName }) {
  return <Dashboard data={data} teamName={teamName} />;
}

export async function getServerSideProps(_ctx) {
  const teamName = getCookie(_ctx.req.headers.cookie, "teamName");
  const res = await httpPOST(`${getBaseURL()}/api/teamData`, { teamName });
  const data = res.members;

  return { props: { data, teamName } };
}
