import React from "react";
import { logo } from "../assets";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dallas } from "../assets";

const Footer = () => {
  return (
    <div className="bg-darkgreen flex flex-col  text-white items-center  " id="contacts">
      {" "}
      <div className="flex md:flex-row flex-col  gap-10 justify-around border-b-2 md:mx-20 pt-4 items-center ">
        <div className="flex flex-col  md:w-auto w-full ">
          <h1 className="font-bold mb-4 ">Quick Links</h1>
          <ul>
            <li>Onsitehealthcare</li>
            <li>About</li>
            <li>Carreer</li>
            <li>Covid19</li>
          </ul>
        </div>
        <div className="max-w-[500px]">
          <img src={dallas} alt="dallas_onsitehomepage" className=" pb-4" />
        </div>
        <div className="flex flex-col md:w-auto  w-full">
          <h1 className="font-bold mb-4 ">Contacts</h1>
          <ul>
            <li>info@onsitehealthcare.com</li>
            <li>+123 456 7890</li>
            <li>+123 456 7890</li>
          </ul>
        </div>
      </div>
      <div className="flex md:mx-20 w-full gap-2 flex-col items-center justify-center">
        {" "}
        <div className="flex md:flex-row gap-2 flex-col justify-between items-center  w-[70%]">
          <div className="flex md:flex-row flex-col items-center">
            <img src={logo} alt="onsitehomehealthcare" className="w-[130px]" />
            <p className="ml-[-30px]">
              <span className="font-bold">ONSITE</span> HOME HEALTH CARE
            </p>
          </div>

          <div className="flex flex-row text-white">
            {" "}
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
        <div className="flex items-center w-full justify-center">
          <p>Copyright Harry Suter @2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
