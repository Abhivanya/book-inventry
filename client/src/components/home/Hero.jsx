import React from "react";
import HeroImage from "../../assets/heroImg.png";
const Hero = () => {
  return (
    <div className="relative h-[500px] bg-blue-500">
      <div className="h-full relative overflow-hidden">
        <img
          src={HeroImage}
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-12 left-0 flex items-center  z-10 text-white w-full">
        <div className="flex flex-wrap flex-col gap-7 items-center mx-auto justify-center ">
          <h1 className="text-2xl md:text-3xl text-yellow-600 font-bold ">
            The Book Lover's Dreamland Awaits!
          </h1>
          <p className=" text-center w-[80%]">
            Welcome to the Book Inventry here you can get various type of books
            and which are from diffrent category. You can also add your own as
            well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
