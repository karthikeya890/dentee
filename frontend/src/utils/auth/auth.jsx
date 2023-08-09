import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const Auth = (props) => {
  const token = Cookies.get("jwtToken");

  if (!token) {
    return <Navigate to="/login" replace="true" />;
  }

  return props.children;
};

export default Auth;
