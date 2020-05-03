import fetch from 'isomorphic-unfetch';
import Dashboard from "../components/Dashboard/Dashboard";
import { getBaseURL } from "../utils/getBaseUrl";

export default function Index({ data }) {
  return <Dashboard data={data} />;
}

export async function getServerSideProps() {
  const response = await fetch(`${getBaseURL()}/api/teamData`).then((res) =>
    res.json()
  );

  const { data } = response;

  return { props: { data } };
}
