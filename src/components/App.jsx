import { PrivateRoute } from "./Routes/PrivateRoute";
import { RestrictedRoute } from "./Routes/ResrtictedRoute";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Layout } from "./Layout/Layout";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "./HookAuth/HookAuth";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Contacts = lazy(() => import("../pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<RestrictedRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
