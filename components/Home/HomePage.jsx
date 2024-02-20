"use client";
import React, { useState } from "react";
import NavBar from "../NavBar";
import Barner from "../Barner";
import HomeBackground from "../HomeBackground";
import HomeFooter from "../HomeFooter";
import Footer from "./Footer";
import HomeServices from "../HomeServices";
import Counter from "../Counter";
import Testimonies from "../Testimonies";
import Solutions from "../Solutions";
import LatestNews from "../LatestNews";
import Together from "../Together";
import HomePageFooter from "../HomePageFooter";
import HomeCopyright from "../HomeCopyright";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Barner />
      <HomeBackground />
      <HomeFooter />
      <Footer />
      <HomeServices />
      <Counter />
      <Testimonies />
      <Solutions />
      <LatestNews />
      <Together />
      <HomePageFooter />
      <HomeCopyright />
    </div>
  );
}
