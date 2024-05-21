export const AUTH_TOKEN_KEY = "auth";

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const setAuthToken = (newToken) =>
  localStorage.setItem(AUTH_TOKEN_KEY, newToken);

export const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);
