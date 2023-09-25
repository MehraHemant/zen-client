export const base_url = "https://zen-portal-backend.onrender.com/api";

const tokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).token
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${tokenFromLocalStorage}`,
    Accept: "application/json",
  },
};
