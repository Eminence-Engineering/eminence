// react
import PropTypes from "prop-types";
import { IoArrowForwardSharp } from "react-icons/io5";

// components
import Header from "./HeaderWhite";

const Hero = ({ bgImg, pageTitle }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col lg:pt-7 pb-20 md:pb-32"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Header />
      <div className="container p-5 text-white flex-1 flex flex-col justify-end items-center gap-6 md:gap-7">
         <h3 className="font-semibold text-3xl md:text-6xl">{pageTitle}</h3>
        <p className="flex items-center gap-3 text-base md:text-2xl">
          Home <IoArrowForwardSharp /> {pageTitle}
        </p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  bgImg: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default Hero;
