import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuth] = useContext(AuthContext);

  return isAuth ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
