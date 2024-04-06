import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../HookAuth/HookAuth";

export const PrivateRoute = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={"/login"} /> : <Outlet />;
};
