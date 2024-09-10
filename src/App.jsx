import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";
import Loader from "./components/Loader/Loader.jsx";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { selectAuthIsRefreshing } from "./redux/auth/selectors.js";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);

function App() {
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>User is refreshing, please wait...</p>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
