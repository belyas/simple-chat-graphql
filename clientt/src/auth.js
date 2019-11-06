import { setToken } from "./storage";

const BASE_URL = "http://localhost:5000/login";

export const login = (email, password) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(({ token }) => setToken(token))
    .catch(console.log);
};
