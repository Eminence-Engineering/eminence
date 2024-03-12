// react
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

// hamburger
import { Squash as Hamburger } from "hamburger-react"

// images
import logo from "../assets/images/logo-blue.png"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <header className="relative bg-white text-black lg:rounded-2xl flex items-center justify-between gap-2 p-5 md:py-7 z-50 lg:container transition-all">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-20 sm:w-28 md:w-44" />
          </Link>
        </div>

        <ul className="list-none hidden lg:flex items-center gap-8">
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/solutions"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Our Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to={"/faqs"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              FAQ
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="text-sm font-semibold">
            <Link
              to={"/"}
              className="bg-primary text-white px-[10px] md:px-5 py-[10px] md:py-[15px] rounded-md border border-transparent transition-all duration-300 hover:bg-transparent hover:border-primary hover:text-primary"
            >
              Get in touch
            </Link>
          </div>

          <div className="block lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </div>
        </div>
      </header>

      <ul className={isOpen ? "nav-menu" : "nav-menu active"}>
        <li>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/solutions"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Our Solutions
          </NavLink>
        </li>
        <li>
          <NavLink to={"/faqs"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
