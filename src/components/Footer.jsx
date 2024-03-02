// react
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

// images
import logo from "../assets/images/logo-white.png";

// svgs
import email from "../assets/svgs/email.svg";
import phone from "../assets/svgs/phone.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-5 pt-12 py-7">
      <div className="container flex flex-row flex-wrap xl:flex-nowrap justify-between gap-20 md:gap-10">
        <div className="sm:max-w-64">
          <h4 className="mb-6">
            <img src={logo} alt="logo" className="w-44" />
          </h4>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <div className="flex items-center gap-4">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="border p-1 rounded-sm"
            >
              <FaFacebookF className="text-base" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="border p-1 rounded-sm"
            >
              <FaXTwitter className="text-base" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="border p-1 rounded-sm"
            >
              <AiFillInstagram className="text-base" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="border p-1 rounded-sm"
            >
              <FaLinkedinIn className="text-base" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="border p-1 rounded-sm"
            >
              <FaYoutube className="text-base" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6 sm:whitespace-nowrap">About us</h4>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Mission
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Our team
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Awards
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Testimonials
            </Link>
          </p>
          <p className="">
            <Link to={"/"} className="footer-link">
              Privacy policy
            </Link>
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6 sm:whitespace-nowrap">Services</h4>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Web design
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Web development
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Mobile design
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              UI/UX design
            </Link>
          </p>
          <p className="">
            <Link to={"/"} className="footer-link">
              Branding design
            </Link>
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6 sm:whitespace-nowrap">Portfolio</h4>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Corporate websites
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              E-commerce
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Mobile apps
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Landing pages
            </Link>
          </p>
          <p className="">
            <Link to={"/"} className="footer-link">
              UI/UX projects
            </Link>
          </p>
        </div>

        <div className="">
          <h4 className="font-semibold mb-6 sm:whitespace-nowrap">
            Contact us
          </h4>
          <div className="flex items-center gap-4 mb-6">
            <img src={email} alt="email-logo" />
            <p className="text-sm">
              <p className="text-[#B4B9C9]">Email:</p>
              <a
                href="mailto:contact@brix.com"
                className="footer-link !text-white before:!bg-white font-semibold"
              >
                contact@brix.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src={phone} alt="phone-logo" />
            <p className="text-sm">
              <p className="text-[#B4B9C9]">Phone:</p>
              <a
                href="tel:4146875892"
                className="footer-link !text-white before:!bg-white font-semibold"
              >
                (414) 687-5892
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center mt-20">
        <hr />
        <p className="pt-5 text-[#B4B9C9]">
          Copyright &copy; {new Date().getFullYear()} EMINENCE Agency | All
          Rights Reserved |{" "}
          <Link
            to={"/"}
            className="text-[#6D758F] underline transition-all duration-200 hover:no-underline"
          >
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link
            to={"/"}
            className="text-[#6D758F] underline transition-all duration-200 hover:no-underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
