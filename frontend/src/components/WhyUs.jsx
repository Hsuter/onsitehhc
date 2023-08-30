import React from "react";
import { graphcare } from "../assets";
import { cost } from "../assets";
import { experience } from "../assets";

const WhyUs = () => {
  return (
    <div className="w-full mt-[-50px] gap-20 flex flex-col  items-center justify-center ">
      <div className="items-center justify-center flex flex-col">
        <p className="text-[50px] font-bold text-center">
          Why should you choose us
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-20  ">
        <div className="w-[300px] h-[400px] justify-center items-center flex flex-col border-green border-[1px] rounded-2xl shadow-2xl text-center">
          <img src={graphcare} />
          <h1 className="font-bold">Whole Personal care </h1>
          <p className="mx-2">
            Everyday of life matters. At OnsiteHomeHealthCare, we view home
            based care services as a means of allowing people to make most of
            their time,even when faced with life-limiting circumstamces.We
            provide compasionate care with undoubted commitment, empathy and
            expertise to create happy moments and positive experience
          </p>
        </div>
        <div className="w-[300px] h-[400px] justify-center items-center flex flex-col border-green border-[1px] rounded-2xl text-center shadow-2xl">
          <img src={cost} />
          <h1 className="font-bold">Integrity and trust</h1>
          <p className="mx-2">
            We do what we say and deliver as promised and agreed. Our proven
            results and success stories reflect our commitment. We foster
            genuine personal connections that offer emotional, phychological,
            and spiritual support taking an active role in the interest that
            bring joy and peace.Having eraned trust from families we've served
            many and we are a leading homehealthcre provider
          </p>
        </div>
        <div className="w-[300px] h-[400px] justify-center items-center flex flex-col border-green border-[1px] rounded-2xl text-center shadow-2xl">
          <img src={experience} />
          <h1 className="font-bold">Proffessionalism </h1>
          <p className="mx-2">
            Every life is presious and tells an incredible story. We celebrate
            that each day by honoring our patience with genuine and personal
            attention. Our staff are proffessionally trained and of high morals
            standing and proper character. We work closely with doctors and
            otehr healthcare providers to coordinate services where necessary.
          </p>
        </div>
      </div>
      <div
        className="bg-white w-[80%] font-bold flex md:flex-row flex-col gap-10 justify-around items-center
       py-10 mt-20 "
      >
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] ">10+</p>
          <p>Services</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] ">10+</p>
          <p>Years Of Experience</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] ">500+</p>
          <p>Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] ">1K+</p>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
