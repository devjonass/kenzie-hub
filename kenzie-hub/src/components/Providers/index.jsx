import React from "react";
import { ModalProvider } from "styled-react-modal";

import { UserProvider } from "../../contexts/UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
         {children}
      </ModalProvider>
      
    </UserProvider>
  );
};
