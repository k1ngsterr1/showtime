import axios from "axios";

interface ILoginData {
  email: string;
  password: string;
}

export async function loginAccount(loginData: ILoginData) {
  try {
    const response = await axios.post(
      "https://showtime.up.railway.app/api/auth/login",
      loginAccount
    );
  } catch (error: unknown) {
    console.error("Failed to login:", error);
    return null;
  }
}
