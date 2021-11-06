import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, error, setError } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from?.pathname || "/";

  const GoogleLogin = () => {
    signInWithGoogle()
      .then((result) => history.push(redirect_uri))
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    // when use come from public route empty error message
    redirect_uri === "/" && setError("");
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div className="container my-5">
      <div style={{ height: "300px" }} className="card p-3 col-md-6 mx-auto">
        <h1 className="text-center">Sign In</h1>
        <hr className="w-50 mx-auto" />
        <p className="text-center text-danger">{error && error}</p>
        <button onClick={GoogleLogin} className="btn btn-dark my-5 fs-5">
          <img
            width="5% m-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          <span> Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
