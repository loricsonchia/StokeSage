import React, { useEffect } from "react";
import { Checkmark } from "react-checkmark";

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-700 p-10 rounded-3xl shadow-lg flex flex-col items-center">
        <h2 className="text-4xl font-semibold mt-2 mb-8 text-stockSage">
          {message}
        </h2>
        <Checkmark size="xLarge" />
      </div>
    </div>
  );
};

export default Modal;
