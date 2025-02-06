import React, { useContext, useState } from "react";
import Hero from "../components/home/Hero";
import BestPicks from "../components/home/BestPicks";

const Home = () => {
  return (
    <div className="w-full px-0 md:px-4 md:w-[80%] md:mx-auto ">
      <Hero />
      <BestPicks />
    </div>
  );
};

export default Home;
