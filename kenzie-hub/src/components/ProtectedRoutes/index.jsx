import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { users } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!users) {
      navigate("/login");
    }
  }, []);

  return <>{users ? <Outlet /> : navigate("/login")};</>;
};
