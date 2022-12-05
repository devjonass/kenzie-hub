import React from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../components/services/api";
import { Navbar, Header, Main } from "./styles";

export const Dashboard = () => {
  const navigate = useNavigate();

  const User = async () => {
    try {
      const response = await api.get("profile", {
        Authorization: `Bearer ${api.interceptors.request.use(
          JSON.parse(localStorage.getItem("@TOKEN"))
        )}`,
      });
    } catch (error) {}
  };
  User();

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
        <h3>Olá /pergunta</h3>
        <p>testesteste</p>
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
