"use client";
import React from "react";
import { useState } from "react";
function FAQ() {
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
  const kyotoCreativeContactInfo = [
    {
      id: 1,
      question: "How can I reach Kyoto Creative Co. for business inquiries?",
      answer:
        "We welcome your inquiries! For prompt assistance, feel free to WhatsApp or call us at our India office: +91 7031853012 or our NY office: +1 (315) 961-7210. You can also reach us via email at business@kyotocreative.com.",
    },
    {
      id: 2,
      question:
        "What services does Kyoto Creative Co. offer, and how can I discuss a potential project?",
      answer:
        "To discuss your project or learn more about our services, please reach out to us via WhatsApp, phone, or email. Our dedicated team is ready to explore how Kyoto Creative Co. can tailor its expertise to meet your unique business needs.",
    },
    {
      id: 3,
      question:
        "Can I schedule a meeting with the Kyoto Creative Co. team to discuss my business goals?",
      answer:
        "Absolutely! We encourage you to connect with us. You can schedule a meeting by calling or messaging us on WhatsApp at the provided contact numbers. Alternatively, you can email us at business@kyotocreative.com.",
    },
    {
      id: 4,
      question:
        "Is Kyoto Creative Co. open to collaborations and partnerships?",
      answer:
        "Yes, we are! If you are interested in exploring collaborations or partnerships with Kyoto Creative Co., please reach out to us through WhatsApp, phone, or email. We look forward to discussing how we can mutually benefit from a strategic alliance.",
    },
    {
      id: 5,
      question:
        "How can I stay updated on Kyoto Creative Co.'s latest projects and insights?",
      answer:
        "Stay connected with Kyoto Creative Co. by visiting our website at kyotocreative.com. Additionally, you can follow us on our social media channels for the latest updates, insights, and glimpses into our ongoing projects.",
    },
  ];
  return (
    <div className="bg-[#2E2E2E] text-white xl:p-20 flex flex-col gap-10 items-center ten:p-20 p-4">
      <h1 className="xl:text-[40px] font-Syncopate font-bold text-center">
        FREQUENTLY ASKED<br></br> QUESTIONS
      </h1>
      <div className="ten:w-[768px] xl:w-[768px]  text-sm font-Syncopate font-bold">
        <div>
          {kyotoCreativeContactInfo.map((quest) => (
            <div
              key={quest.id}
              className="  cursor-pointer"
              onClick={() => toggleQuestion(quest.id)}
            >
              <hr />
              <div className="flex justify-between  py-4 px-2 xl:gap-40 font-RobotoMono items-center hover:bg-[#4a4a4a]">
                <h1 className="ten:w-[616px]">{quest.question}</h1>
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
    </div>
  );
}

export default FAQ;
