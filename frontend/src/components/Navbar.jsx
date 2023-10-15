import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useHref } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [active, setActive] = useState(null);

  const handleMenu = () => {
    setMenu(!menu);
  };

  // Update the menu state based on screen size on component mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenu(false); // Set menu to false for small screens
      } else {
        setMenu(true); // Set menu to true for larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between text-green md:px-28 ">
      <div onClick={handleMenu} className="md:hidden flex z-[1000]">
        {menu ? (
          <div>
            <CloseIcon />
          </div>
        ) : (
          <div>
            {" "}
            <MenuIcon />
          </div>
        )}
      </div>
      <div className="flex md:flex-row flex-row-reverse">
        <div className="">
          <img src={logo} alt="onsite_homecare_logo " className="w-[150px]" />
        </div>
        <div className="flex items-center font-bold  ">
          ONSITE HOME HEALTHCARE
        </div>
      </div>

      <div
        className={`${
          menu ? "flex " : "hidden"
        } items-center md:w-auto w-full md:relative absolute   md:bg-transparent bg-white md:pt-0 pt-10 md:pl-0 pl-4 }`}
      >
        <ul className="flex md:flex-row  flex-col gap-6 font-medium  ">
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(0)}
            onMouseLeave={() => setActive(-1)}

          >
            <Link to="/">  <span
              className={`underline-animation ${active === 0 ? "active" : ""}`}
            >
              Home
            </span></Link>
          
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(1)}
            onMouseLeave={() => setActive(-1)}
          >
            {" "}
            <span
              className={`underline-animation ${active === 1 ? "active" : ""}`}
             >
              <a href="#services">  Services</a>
            </span>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(2)}
            onMouseLeave={() => setActive(-2)}
          >
            <span
              className={`underline-animation ${active === 2 ? "active" : ""}`}
            >
              {" "}
              About
            </span>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(3)}
            onMouseLeave={() => setActive(-3)}
          >
            <span
              className={`underline-animation ${active === 3 ? "active" : ""}`}
            >
              Feedback
            </span>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(4)}
            onMouseLeave={() => setActive(-4)}
          >
            <span
              className={`underline-animation ${active === 4 ? "active" : ""}`}
            >
              <a href="#contacts">   Contact</a>
           
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
