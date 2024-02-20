"use client";
import React, { useState } from "react";

const DownloadForm = () => {
  const [forxlata, setForxlata] = useState({
    // Your form fields here
    Postcode: "",
    TenantName: "",
    MoveInDate: "",
    Duration: "",
    RoomNumber: "",
    Email: "",
    PhoneNumber: "",
    ProfessionalStatus: "",
    RentAgreed: "",
    HoldingDeposit: "",
    SecurityDeposit: "",
    Pets: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...forxlata, PropertyAddress };

    try {
      const response = await fetch("/api/housing/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const sendMailResponse = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: true,
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok && sendMailResponse.ok)
        setForxlata({
          Postcode: "",
          TenantName: "",
          MoveInDate: "",
          Duration: "",
          RoomNumber: "",
          Email: "",
          PhoneNumber: "",
          ProfessionalStatus: "",
          RentAgreed: "",
          HoldingDeposit: "",
          SecurityDeposit: "",
          Pets: "",
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex bg-gray-200 items-center max-w-max justify-center">
      <div className="grid bg-white rounded-lg shadow-xl w-full">
        <div className="flex justify-center pt-8">
          <div className="flex">
            <h1 className="font-bold text-2xl uppercase">Download Form</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1  gap-5 xl:gap-8 mt-5 mx-7">
            <div className="grid grid-cols-1">
              <label className="uppercase xl:text-sm text-xs text-gray-500 text-light font-semibold">
                Full Name
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-black mt-1 border-b-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                type="text"
                value={forxlata.Fullname}
                onChange={(e) =>
                  setForxlata({ ...forxlata, Fullname: e.target.value })
                }
                placeholder="Enter Your FullName"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-8 mt-5 mx-7">
            <div className="grid grid-cols-1">
              <label className="uppercase xl:text-sm text-xs text-gray-500 text-light font-semibold">
                Email
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-black mt-1 border-b-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                type="text"
                value={forxlata.Email}
                onChange={(e) =>
                  setForxlata({ ...forxlata, Email: e.target.value })
                }
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="uppercase xl:text-sm text-xs text-gray-500 text-light font-semibold">
                Phone Number
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-black mt-1 border-b-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                type="text"
                value={forxlata.PhoneNumber}
                onChange={(e) =>
                  setForxlata({ ...forxlata, PhoneNumber: e.target.value })
                }
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-center  gap-4 pt-10 pb-8">
            <button
              type="submit"
              className="w-auto bg-red-700 hover:bg-[#4baead] rounded-lg shadow-xl font-medium text-white px-4 py-2 uppercase"
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownloadForm;
