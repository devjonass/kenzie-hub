import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../components/services/api";
import { Navbar, Header, Main } from "./styles";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get("profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {}
    };
    getUser();
  }, [token]);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    navigate("/login");
  };

  return (
    <>
      <Navbar>
        <div>
          <h2>Kenzie Hub</h2>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </Navbar>
      <Header>
        <h3>Olá, {users.name}</h3>
        <p>{users.course_module}</p>
      </Header>
      <Main>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Main>
    </>
  );
};
