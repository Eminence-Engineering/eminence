// images
import heroImg from "../../assets/images/Who.png"

// icons
import { FaArrowRight } from "react-icons/fa6"

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white py-24 p-5">
      <div className="container grid lg:grid-cols-2 gap-20 md:gap-10">
        <div className="flex flex-col justify-start gap-5 md:gap-8 text-center md:text-left">
          <div className="relative flex items-center justify-center md:justify-start">
            <div className="hidden md:block flex-grow max-w-24 border-2 border-blue-800"></div>
            <p className="flex-shrink md:mx-4 text-xl text-black font-medium">Who we Are</p>
          </div>
          <h1 className="text-3xl md:text-[56px] md:leading-tight font-semibold text-black">We're Professional IT Solutions Agency</h1>
          <p className="text-lg text-black md:max-w-sm">
            Lorem ipsum dolor sit amet consectetur. Pretium dolor amet fames non morbi luctus id aliquet.
          </p>

          <button className="max-w-fit text-lg font-bold rounded-lg text-white py-3 px-7 bg-primary mx-auto md:mx-0">
            Start a project <FaArrowRight className="inline ml-2" />
          </button>
        </div>

        <img src={heroImg} alt="hero" className="w-full" />
      </div>
    </section>
  )
}

export default WhoWeAre
