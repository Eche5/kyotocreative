"use client";
import React, { useState } from "react";
import book1 from "@/images/e50c016f-b6a8-4666-8fb8-fe6bd5fd9fec_rw_1920.jpeg";
import book2 from "@/images/WhatsApp Image 2024-02-02 at 20.52.57_0fb34ed1.jpg";
import book3 from "@/images/WhatsApp Image 2024-02-02 at 20.52.58_1ec8f41c.jpg";
import book4 from "@/images/WhatsApp Image 2024-02-02 at 20.52.57_1428b9a0.jpg";
import book5 from "@/images/WhatsApp Image 2024-02-02 at 20.52.59_15685057.jpg";
import book6 from "@/images/WhatsApp Image 2024-02-02 at 20.52.58_1f30a508.jpg";
import Image from "next/image";
import DownloadFormModal from "./DownloadFormModal";
import DownloadForm from "./DownloadForm";
export default function BookList() {
  const books = [
    { id: "1", pics: book1 },
    { id: "2", pics: book2 },
    { id: "3", pics: book3 },
    { id: "4", pics: book4 },
    { id: "5", pics: book5 },
    { id: "6", pics: book6 },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    document.body.style.overflow = "auto";
  };
  return (
    <div className=" flex justify-between h-auto bg-[#CFE8FF]">
      <div className="  relative w-[5.6rem] h-auto border-2 border-black  hidden xl:flex ten:flex  mac:flex justify-center items-center ">
        <h1 className="rotate-[270deg] absolute  text-nowrap text-[20px] font-Syncopate font-bold">
          BOOKS
        </h1>
      </div>
      <div className=" w-full xl:p-20 p-20  border-2 border-black flex justify-center items-center">
        <ul className=" xl:grid xl:grid-cols-3 xl:gap-40 ten:grid ten:grid-cols-3 ten:gap-40 mac:grid mac:grid-cols-3 mac:gap-40 flex flex-col gap-10">
          {books.map((book) => {
            return (
              <li key={book.id} className=" flex flex-col">
                <Image src={book.pics} alt="books" className=" h-56  w-48" />
                <button
                  className=" bg-green-600 font-Syncopate font-bold py-4"
                  onClick={handleOpenModal}
                >
                  DOWNLOAD
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <DownloadFormModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <DownloadForm />
      </DownloadFormModal>
      <div className="  w-[5.6rem] h-auto  border-2 border-black hidden xl:flex  ten:flex  mac:flex justify-center items-center "></div>
    </div>
  );
}
