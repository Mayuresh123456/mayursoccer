export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const getCurrentUser = () => {
  return localStorage.getItem("currentUser");
};

export const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
};
