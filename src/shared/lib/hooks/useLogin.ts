import axios from "axios";

interface ILoginData {
  email: string;
  password: string;
}

export async function loginAccount(loginData: ILoginData) {
  try {
    const response = await axios.post(
      "https://showtime.up.railway.app/api/auth/login",
      loginData
    );

    const data = response.data.user;

    const userData = {
      id: data.id,
      username: data.username,
      email: data.email,
      role: data.role,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("user:", userData, response);

    window.location.href = "/user";
  } catch (error: unknown) {
    console.log(loginData);
    console.error(
      "Failed to login:",
      error.response ? error.response.data : error
    );
    return null;
  }
}
