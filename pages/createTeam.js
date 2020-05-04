import React from "react";
import CreateTeam from "../components/CreateTeam/CreateTeam";
import getBaseURL from "../utils/getBaseUrl";
import { httpPOST } from "../httpClient/httpClient";

export default function Index({ teamNames }) {
  return <CreateTeam teamNames={teamNames} />;
}

export async function getServerSideProps(_ctx) {
  const res = await httpPOST(`${getBaseURL()}/api/allTeamData`);
  const teamNames = res.map((t) => t.teamName);
  return { props: { teamNames } };
}
