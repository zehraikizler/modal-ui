import React from "react";
import "@/styles/layout/modalContent.css";
import { ModalCloseBtn } from "./modalCloseBtn";

export const ModalContent = ({ children }: any) => {
  return (
    <div className="modal-content">
      <ModalCloseBtn />
      {children}
    </div>
  );
};
