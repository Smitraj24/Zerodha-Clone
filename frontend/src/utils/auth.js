// utils/auth.js
export const isAuthenticated = () => {
  return localStorage.getItem("token"); // returns token if logged in
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
