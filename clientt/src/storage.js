import jwtDecode from "jwt-decode";

const TOKEN_KEY = "chat:token";

export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUserFromToken = () => {
  const token = getToken();

  if (token) {
    return jwtDecode(token);
  }

  return null;
};
