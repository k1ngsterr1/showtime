import axios from "axios";

interface IAccountData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export async function createAccount(accountData: IAccountData) {
  try {
    const response = axios.post(
      "https://showtime.up.railway.app/api/auth/register",
      accountData
    );

    console.log("account created successfully");

    window.location.href = "/home";
  } catch (error: unknown) {
    console.error("Failed to create account:", error);
    return null;
  }
}
