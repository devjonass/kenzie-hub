import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  const { users } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {users && <Route path="/dashboard" element={<Dashboard />} />}
    </Routes>
  );
};
