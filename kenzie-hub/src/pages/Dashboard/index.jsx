import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Navbar, Header, Main, ListTech } from "./styles";
import { BsTrash } from "react-icons/bs";
import { ModalContext } from "../../contexts/ModalContext";
import { AddModalTech } from "../../components/AddModal";
import { ModalProvider } from "styled-react-modal";
import { ViewModal } from "../../components/ViewModal";

export const Dashboard = () => {
  const { users, techs } = useContext(UserContext);
  const {
    modalIsOpen,
    setModalIsOpen,
    modalView,
    setModalView,

    setDataTech,
  } = useContext(ModalContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {modalIsOpen && <AddModalTech />}
      {modalView && <ViewModal />}
      <ModalProvider>
        <Navbar>
          <div>
            <h2>Kenzie Hub</h2>
            <button onClick={() => logout()}>Sair</button>
          </div>
        </Navbar>
        <Header>
          <h3>{users.name}</h3>
          <p>{users.course_module} </p>
        </Header>
        <Main>
          <div className="techsAndButton">
            <h3>Tecnologias</h3>
            <button onClick={() => setModalIsOpen(true)}>+</button>
          </div>

          <ListTech>
            {techs.map((tech, index) => {
              return (
                <li
                  onClick={() => {
                    setModalView(true);
                    setDataTech(tech);
                  }}
                  key={index}
                >
                  {/* <button
                    className="btnCLick"
                    onClick={() => {
                      setDataTech({ tech });
                      setModalView(true);
                    }}
                  > */}
                  <h5>{tech.title}</h5>
                  <div className="statusAndtrash">
                    <p>{tech.status}</p>
                    <span>
                      <BsTrash style={{ color: "white", cursor: "pointer" }} />
                    </span>
                  </div>
                  {/* </button> */}
                </li>
              );
            })}
          </ListTech>
        </Main>
      </ModalProvider>
    </>
  );
};
