import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [dataTech, setDataTech] = useState({});

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        dataTech,
        setDataTech,
        modalView,
        setModalView,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
