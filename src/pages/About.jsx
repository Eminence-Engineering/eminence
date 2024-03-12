// components
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import PageChange from "../hooks/PageChange"
import AboutTitle from "../components/about/AboutTitle"
import AboutDescription from "../components/about/AboutDescription"
import AboutImage from "../components/about/AboutImage"
import Socials from "../components/about/Socials"
import Comment from "../components/about/Comment"

// images
import bgAbout from "../assets/images/bg-about.png"
import blue from "../assets/images/about/blueabout.png"
import first from "../assets/images/about/firstgirl.png"
import second from "../assets/images/about/secondgirl.png"

//icons
import { SlArrowRight } from "react-icons/sl"
import { SlArrowLeft } from "react-icons/sl"
//hook
import { useEffect, useState } from "react"
import Services from "../components/about/Services"
import CoreValues from "../components/about/CoreValues"

const About = () => {
  const [leftStyle, setLeftStyle] = useState({})
  const [rightStyle, setRightStyle] = useState({})

  var wrapper
  //carousel function
  useEffect(() => {
    // var buttons = document.querySelectorAll(".btn");
    wrapper = document.querySelector("#wrapper")
    // eslint-disable-next-line
  }, [])

  const scroll = () => {
    var max = wrapper.scrollWidth - wrapper.clientWidth
    setLeftStyle(wrapper.scrollLeft <= 0 ? { display: "none" } : null)
    setRightStyle(wrapper.scrollLeft >= max ? { display: "none" } : null)
  }

  useEffect(() => {
    scroll()
    // eslint-disable-next-line
  }, [])

  const right = () => {
    var direction = 1
    var amount = direction * wrapper.clientWidth
    wrapper.scrollBy({ left: amount, behavior: "smooth" })
  }

  const left = () => {
    var direction = -1
    var amount = direction * wrapper.clientWidth
    wrapper.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <>
      <PageChange pageTitle="About Us | Eminence" />
      <Hero bgImg={bgAbout} pageTitle={"About Us"} />
      <AboutTitle />
      <AboutDescription />
      <AboutImage />
      <Services />
      <CoreValues />
      <div className="mb-20">
        <div
          className="py-9 px-8 md:px-8"
          style={{ backgroundImage: `url(${blue})`, backgroundRepeat: "no-repeat", backgroundSize: "130% 110%" }}
        >
          <div className=" max-w-[1100px] md:flex md:gap-5 mx-auto md:justify-between">
            <div className=" max-w-[500px] md:relative">
              <h3 className="text-[#e7ebf2] font-[500] md:text-[40px] md:leading-[49px] text-[25px] leading-[31px]">
                MEET OUR EXECUTIVES/ ORIGINATORS
              </h3>
              <p className="text-[#efebf2] text-[10px] leading-[21px] md:text-[18px] md:leading-[36px] md:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum, accusamus expedita soluta rerum rem dolor doloribus
                nostrum maiores odio.
              </p>
              <div className="pt-8 flex">
                <button className="w-[48px] h-[48px] rounded-[50%] border-2 border-white text-white hover:bg-white hover:text-[#3a4f38] me-4 flex justify-center items-center">
                  {" "}
                  <SlArrowLeft />
                </button>
                <button className="w-[48px] h-[48px] rounded-[50%] bg-white text-[#3a4f39] hover:bg-transparent hover:text-white hover:border-2 hover:border-white flex justify-center items-center">
                  <SlArrowRight />
                </button>
              </div>
            </div>

            <div className="md:flex md:gap-5 mt-6 md:mt-0">
              <Socials src={first} />
              <Socials src={second} />
            </div>
          </div>
        </div>

        <div className="majorthree">
          <div className="max-w-[1100px] px-8 py-9 md:px-9 mx-auto">
            <div className="max-w-[538px]">
              <h3 className="text-[29px] md:text-[40px] font-[500]">What our clients have to say</h3>
              <p>
                Discover the stories behind our success. Read testimonials from our clients and learn how our digital solutions have made a
                difference in their businesses.
              </p>
            </div>

            <div className="flex overflow-hidden mt-6 relative">
              <div id="wrapper" className="flex overflow-hidden mt-6" onScroll={scroll}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>

              <button
                onClick={left}
                id="prev"
                className="absolute bottom-[40%] left-[25px] w-[48px] h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center "
                style={leftStyle}
              >
                <SlArrowLeft />
              </button>
              <button
                onClick={right}
                id="next"
                className="absolute bottom-[40%] right-[25px] w-[48px] h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center "
                style={rightStyle}
              >
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
