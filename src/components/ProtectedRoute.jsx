import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ApiContext from "../contexts/ApiContext";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { isLoggedIn } = useContext(ApiContext);

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
