import axios from "axios";

export async function logOut() {
  localStorage.removeItem("userData");
  window.location.href = "/login";
}
