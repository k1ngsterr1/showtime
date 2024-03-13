import axios from "axios";

interface IAccountData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function createAccount(accountData: IAccountData) {
  try {
    const response = await axios.post(
      "https://showtime.up.railway.app/api/auth/register",
      accountData
    );

    console.log("account created successfully", response.data);

    window.location.href = "/login";
  } catch (error: unknown) {
    console.error("Failed to create account:", error);
    return null;
  }
}
