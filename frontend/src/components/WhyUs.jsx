import React from "react";
import { graphcare } from "../assets";
import { cost } from "../assets";
import { experience } from "../assets";
import CountUp from "react-countup";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";


const WhyUs = () => {

  
  return (
    <div className=" bg-white w-full mt-[-50px]  flex flex-col  items-center justify-center ">
        <div className="flex md:flex-row flex-col justify-around w-[50vw] mt-[-100px] z-10 mb-20 gap-2 " >
        <div className="flex flex-col bg-white shadow-green shadow-2xl rounded-lg  w-[200px] h-[200px]  hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center gap-2 cursor-pointer" >
          <Link  to="/bookings"><p className="flex flex-col text-[18px]">
            Schedule a Home <br />
            <span className="font-bold text-blue-500 text-[20px]">
              ASSESMENT
            </span>
          </p>
          <CalendarMonthIcon className="text-[70px] " fontSize="" /></Link>
        </div>
        <div className="flex flex-col bg-white rounded-lg  w-[200px] h-[200px] shadow-green shadow-2xl hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2">
          <p className="flex flex-col text-[18px]  ">
            Service area
            <br />
            <span className="font-bold text-blue-500 text-[20px]">COVERED</span>
          </p>
          <LocationOnIcon className="text-[70px] " fontSize="" />
        </div>
        <div className="flex flex-col bg-white  rounded-lg  w-[200px] h-[200px] shadow-green shadow-2xl hover:border-blue-500 border-[0.5px] hover:border-[2px] items-center justify-center text-center cursor-pointer gap-2">
          <p className="flex flex-col text-[18px] ">
            Our <br />
            <span className="font-bold text-blue-500  text-[20px]">
              CAREGIVERS
            </span>
          </p>
          <GroupIcon className="text-[70px] " fontSize="" />
        </div>
      </div>
      <div className="items-center justify-center flex flex-col">
        <p className="text-[50px] font-bold text-center">
        About Onsite Home Healthcare
        </p>
      </div>
      <div>
      
      <p className="text-center text-lg mb-4">
         Onsite Home Healthcare has been a leading provider of comprehensive home care services in the heart of Dallas, Texas.
      </p>
      <p className="text-center text-lg mb-4">
        Our dedicated team offers a range of services, including skilled nursing and therapy, to support the well-being of our clients in the Dallas area and the surrounding communities.
      </p>
      <p className="text-center text-lg mb-4">
        We understand the challenges individuals and their families face after accidents, illnesses, or surgeries. Our mission is to provide quality care to help you or your loved ones recover comfortably in the comfort of your home or senior community.
      </p>
      <p className="text-center text-lg mb-4">
        At Onsite Home Healthcare, your health and safety are our top priorities. Our commitment to delivering exceptional care has earned us recognition as a trusted home care provider in Dallas.
      </p>
      <p className="text-center text-lg">
        For more information about our services, please feel free to contact us at <a href="tel:123-456-7890" className="text-blue-500">123-456-7890</a> or get in touch with one of our dedicated team members.
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
        className="bg-green bg-opacity-[7%] w-[80%] font-bold flex md:flex-row flex-col gap-10 justify-around items-center
       py-10 mt-20 mb-20 "
      >
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] "><CountUp start={0} end={10} duration={5} decimals={0} suffix="+" /></p>
          <p>Services</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] "> <CountUp start={0} end={10} duration={5} decimals={0} suffix="+" /></p>
          <p>Years Of Experience</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] ">  <CountUp start={0} end={500} duration={5} decimals={0} suffix="+" /></p>
          <p>Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] "> <CountUp start={0} end={1000} duration={5} decimals={0} suffix="+" />
          </p>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
