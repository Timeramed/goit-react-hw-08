import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../HookAuth/HookAuth";

export const RestrictedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};
