import fetch from "isomorphic-unfetch";

export async function httpPOST(url, body, headers = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function httpGET(url) {
  const response = await fetch(url);
  return response.json();
}
