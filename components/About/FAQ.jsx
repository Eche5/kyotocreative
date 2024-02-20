"use client";
import React, { useState } from "react";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [openQuestions, setOpenQuestions] = useState([]);
  const [button, setButtton] = useState("+");
  const toggleQuestion = (id) => {
    if (openQuestions.includes(id)) {
      // If the question is open, close it
      setOpenQuestions(openQuestions.filter((qid) => qid !== id));
      setButtton("-");
    } else {
      // If the question is closed, open it
      setOpenQuestions([...openQuestions, id]);
    }
  };
  const Question = [
    {
      id: 1,
      question: "What services does Kyoto Creative Co. offer?",
      answer:
        "Kyoto Creative Co. provides a comprehensive suite of services, including strategic business consulting, market research, web and app development, digital marketing, and creative media production. Our goal is to offer end-to-end solutions that seamlessly integrate marketing brilliance and technological innovation.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How does Kyoto Creative Co. approach client collaboration?",
      answer:
        "We believe in collaborative partnerships. From the initial consultation to project execution, we work closely with our clients, ensuring open communication, shared goals, and a deep understanding of their vision. Your success is our priority, and we value the power of teamwork in achieving it.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What makes Kyoto Creative Co.'s approach unique?",
      answer:
        "What sets us apart is our holistic approach. We go beyond conventional solutions, blending innovative thinking with proven methodologies. This unique combination allows us to create bespoke strategies and deliver results that not only meet but exceed expectations.",
      isOpen: false,
    },
    {
      id: 4,
      question:
        "How does Kyoto Creative Co. ensure the security and confidentiality of client information?",
      answer:
        "Security and confidentiality are paramount to us. We employ industry-standard measures to safeguard client information, and our team is committed to the highest ethical standards. We prioritize the trust our clients place in us and take every precaution to maintain the integrity and security of their data.",
      isOpen: false,
    },
    {
      id: 5,
      question:
        "How can Kyoto Creative Co. contribute to the success of my business?",
      answer:
        "Kyoto Creative Co. is more than a service provider; we're strategic partners in your success. By leveraging our expertise in marketing and technology, we empower your business with innovative solutions, strategic insights, and a collaborative approach. Together, we can transform your vision into a success story.",
      isOpen: false,
    },
  ];

  return (
    <div className=" flex justify-between bg-[#F4F4F4]">
      <div className=" bg-gradient-to-t from-[#cff6cd] to-transparent w-[5.6rem] hidden ten:flex  mac:flex xl:flex h-auto border-2 border-black border-b-0  justify-center items-center ">
        <h1 className="rotate-[270deg] absolute text-nowrap text-[20px] font-Syncopate font-bold">
          VALUES
        </h1>
      </div>
      <div className=" bg-[#2E2E2E] text-white w-full h-full p-4  xl:p-20 ten:p-20 mac:p-20">
        <h1 className=" xl:text-[40px] font-Syncopate font-bold text-center uppercase">
          Why should<br></br> you work with us?
        </h1>
        <div className=" xl:px-40 ten:px-40 mac:px-40 py-20 text[20px] font-Syncopate font-bold">
          {Question.map((quest) => (
            <div
              key={quest.id}
              className="  cursor-pointer"
              onClick={() => toggleQuestion(quest.id)}
            >
              <hr />
              <div className="flex justify-between py-4 px-2 xl:gap-40 font-RobotoMono items-center hover:bg-[#4a4a4a]">
                <h1>{quest.question}</h1>
                <button onClick={() => toggleQuestion(quest.id)}>+ </button>
              </div>
              {openQuestions.includes(quest.id) && (
                <p className="font-normal font-RobotoMono p-4">
                  {quest.answer}
                </p>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-gradient-to-t from-[#e2bef8] to-transparent w-[5.5rem] ten:flex  mac:flex h-auto border-2 hidden xl:flex border-black  justify-center items-center "></div>
    </div>
  );
}

export default FAQ;
