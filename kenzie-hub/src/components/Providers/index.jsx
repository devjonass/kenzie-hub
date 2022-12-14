import React from "react";
import { ModalProvider } from "../../contexts/ModalContext";

import { UserProvider } from "../../contexts/UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>{children}</ModalProvider>
    </UserProvider>
  );
};
