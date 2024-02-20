"use client";
import React, { useEffect } from "react";

const DownloadFormModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const modalClass = isOpen
    ? "fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50 bg-black  overflow-auto"
    : "hidden";

  return (
    <div className={modalClass} onClick={onClose}>
      <div
        onClick={handleFormClick}
        className=" absolute top-14 bg-white p-8 rounded-lg shadow-xl z-50 max-w-screen-xl"
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DownloadFormModal;
