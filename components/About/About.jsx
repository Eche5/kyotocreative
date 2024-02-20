import React from "react";
import NavBar from "../Services/NavBar";
import MainBar from "./MainBar";
import Building from "./Building";
import Together from "../Together";
import HomePageFooter from "../HomePageFooter";
import HomeCopyright from "../HomeCopyright";
import FAQ from "./FAQ";

function About() {
  return (
    <div>
      <NavBar />
      <MainBar />
      <Building />
      <FAQ />
      <Together />
      <HomePageFooter />
      <HomeCopyright />
    </div>
  );
}

export default About;
