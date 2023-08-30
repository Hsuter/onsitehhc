import React from "react";
import { nursehp, graph, pills, plus } from "../assets";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col  items-center ">
      <div className="flex flex-col items-center md:w-[50%] w-[90%] md:pl-40">
        <p className="md:text-[50px] text-[30px] font-bold ">
          Get Convenience For Your Health Services
        </p>
        <p className="w-full">
          We Offer quality care for children and the elderly at the comfort of
          the clients home.
        </p>
        <div className=" flex w-full md:justify-start justify-center ">
          {" "}
          <button className="bg-green rounded-full w-[140px] py-2 mt-10 text-white font-extralight ">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative flex  md:mr-20">
        <img
          src={nursehp}
          alt="onsite_healthcare_nurse"
          className="w-[600px]"
        />
        <div className="absolute  sm:top-80 top-60  md:left-40 left-20  bg-white px-10 rounded-2xl bg-opacity-75 py-[5px] ">
          {" "}
          <img src={graph} className=" sm:w-[60px] w-[40px]" />
        </div>
        <div className="absolute  md:right-20 right-10 md:bottom-40 bottom-20 bg-white px-3 rounded-2xl bg-opacity-75 py-[5px]">
          {" "}
          <img src={pills} className="sm:w-[60px] w-[40px]" />
        </div>

        <div className="absolute sm:top-20 top-10 right-10 bg-white px-3 rounded-2xl bg-opacity-75 py-[5px]">
          <img src={plus} className="sm:w-[60px] w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
