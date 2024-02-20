import React from "react";
import NavBar from "../Services/NavBar";
import MainBar from "./MainBar";
import ContactForm from "./ContactForm";
import Address from "./Address";
import FAQ from "./FAQ";
import HomePageFooter from "../HomePageFooter";
import HomeCopyright from "../HomeCopyright";

function Contact() {
  return (
    <div>
      <NavBar />
      <MainBar />
      <ContactForm />
      {/* <Address /> */}
      <FAQ />
      <HomePageFooter />
      <HomeCopyright />
    </div>
  );
}

export default Contact;
