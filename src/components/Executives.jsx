// components
import Socials from "./Socials"

// images
import girl1 from "../assets/images/girl-1.png"
import girl2 from "../assets/images/girl-2.png"

//icons
import { SlArrowRight } from "react-icons/sl"
import { SlArrowLeft } from "react-icons/sl"

const Executives = () => {
  return (
    <section className="py-32 px-8 md:px-8 executives">
      <div className="container px-5 lg:flex md:gap-14 md:justify-between">
        <div className=" max-w-[500px] md:relative">
          <h3 className="text-card font-medium text-[25px] leading-tight md:text-[40px] mb-4">MEET OUR EXECUTIVES/ ORIGINATORS</h3>
          <p className="text-card text-sm md:text-lg md:leading-loose md:text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum, accusamus expedita soluta rerum rem dolor doloribus nostrum
            maiores odio.
          </p>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#3a4f38] flex justify-center items-center">
              {" "}
              <SlArrowLeft />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#3a4f38] flex justify-center items-center">
              <SlArrowRight />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14 mt-8 lg:mt-0">
          <Socials src={girl1} />
          <Socials src={girl2} />
        </div>
      </div>
    </section>
  )
}

export default Executives
