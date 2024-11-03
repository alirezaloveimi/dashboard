import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { icons } from "../data/icons";

type ModalProps = {
  title: string;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ title, children, show, onClose }: ModalProps) => {
  useEffect(() => {
    const root = document.documentElement;

    show
      ? root.classList.add("overflow-hidden")
      : root.classList.remove("overflow-hidden");
  }, [show]);

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex-center-center transition-ease-300 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div onClick={onClose} className="fixed inset-0 bg-black/80"></div>

      <div
        style={{ backgroundImage: "linear-gradient(80deg, #05052c, #01112e)" }}
        className={`w-[90%] md:w-[500px] relative p-5 rounded-xl transition-ease-300 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex-center-between">
          <h4 className="md:text-lg">{title}</h4>
          <button
            onClick={onClose}
            type="button"
            className="text-lg md:text-2xl"
          >
            {icons.close}
          </button>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
