import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../pages/shared/loader/Loader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isLoading, setError } = useAuth();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <Component />
        ) : (
          (setError("Please Sign In to go forward!!!"),
          (<Redirect to={{ pathname: "/login", state: { from: location } }} />))
        )
      }
    />
  );
};

export default PrivateRoute;
