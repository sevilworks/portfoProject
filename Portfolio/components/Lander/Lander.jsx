/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Lander = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      className={`flex  container pt-[200px] h-full min-h-screen py-20 px-6 lg:px-8 ${
        windowWidth < 900
          ? "element-center p-[30px] flex-col"
          : "p-[30px] pr-[700px]"
      }`}
    >
      <div className="element-center">
        <div className="px-[40px] flex-row justify-between max-w-[100%]">
          <div
            className={`relative justify-center lg:justify-end ${
              windowWidth < 900 ? "flex-col" : "flex"
            }`}
          >
            <div className="space-y-8">
              <h1 className="text-white font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-thin">
                Hi,
                <br />
                I'm{" "}
                <span className="font-bold wave-text">Amen Allah Amari</span>
              </h1>

              <p className="text-white text-lg block max-w-[600px] sm:pb-[80px]">
                a web developer skilled in creating responsive, user-friendly
                websites with clean code and modern technologies. I enjoy
                solving challenges and turning creative ideas into functional
                designs. My focus is on delivering impactful web solutions that
                enhance user experiences.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end lg:pl-[200px] ">
              <div className="w-90 h-90 sm:w-80 sm:h-80 lg:w-96 lg:h-96 ">
                <img
                  src="../../src/assets/pictures/devmale2.png"
                  alt="Amen Allah Amari"
                  className="w-full h-full bg-cover shadow-y pt-[40px] md:pt-[20px] lg:pt-[0px]"
                />
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="btn w-[260px] h-[55px] mt-[40px] mx-[100px] lg:mx-[20px] flex justify-center items-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Lander;
