import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};
