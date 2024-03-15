import { useSelector } from "react-redux";
import { getUser } from "./authSlice";
import { Navigate } from "react-router-dom";

export const AuthContainer = ({ children }) => {
  const user = useSelector(getUser);

  return user == null ? children : <Navigate to="/dashboard" />;
};
