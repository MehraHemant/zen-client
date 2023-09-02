export const base_url = "http://localhost:8080/api";

const tokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).token
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${tokenFromLocalStorage}`,
    Accept: "application/json",
  },
};
