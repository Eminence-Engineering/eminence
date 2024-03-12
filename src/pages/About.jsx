// components
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import PageChange from "../hooks/PageChange"
import Abt from "../components/about/Abt"
import Get from "../components/about/Get"
import Image from "../components/about/Image"
import Socials from "../components/about/Socials"
import ServiceCard from "../components/about/ServiceCard"
import Comment from "../components/about/Comment"

// images
import bgAbout from "../assets/images/bg-about.png"
import cube from "../assets/images/about/cube.png"
import design from "../assets/images/about/design.png"
import branding from "../assets/images/about/branding.png"
import union from "../assets/images/about/Union.png"
import excellence from "../assets/images/about/excellence.png"
import speed from "../assets/images/about/Speed.png"
import quality from "../assets/images/about/Quality.png"
import blue from "../assets/images/about/blueabout.png"
import first from "../assets/images/about/firstgirl.png"
import second from "../assets/images/about/secondgirl.png"

//icons
import { SlArrowRight } from "react-icons/sl"
import { SlArrowLeft } from "react-icons/sl"
//hook
import { useEffect, useState } from "react"

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
      <div>
        <div className="md:px-9 py-9 px-8">
          <Abt />
          <Get />
          <Image />

          <div className="four mb-20">
            <div className="leading-[17px] md:leading-[21px] md:text-center  md:w-[600px] md:mx-auto pt-5">
              <h3 className="text-[29px] md:text-[50px] font-[500] leading-[61px]">Our Services</h3>
              <p className="mt-3 text-[#6d758f]">
                As a company, we provide comprehensive services to support your business by leveraging strategy to drive people, process and
                information.
              </p>
            </div>

            <div className="md:flex md:flex-row gap-[10px] md:w-auto md:mx-auto md:max-w-[1100px] flex flex-col mt-2">
              <ServiceCard src={cube} title="Saas Products" content="We build SaaS for Business and Digitized Companies" />

              <ServiceCard
                src={design}
                title="Consultancy"
                content="Need help in picking out a right project or you are thriving to move in a direction but don’t know how to start? we can help you."
              />

              <ServiceCard src={branding} title="Maintenance" content="Software maintenance is a more important technique to handle." />
            </div>
          </div>

          <div className="md:flex md:gap-8 md:items-center mt-6 mb-16">
            <div className="md:w-[450px] mb-4">
              <h3 className="font-[500] text-[29px] md:text-[50px]">Our Core Values</h3>
              <p className="leading-[22px] text-[14px] text-[#6d758f]">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est. Lorem
                ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
              </p>
            </div>

            <div className="bg-[#e7ebf2] p-[32px] rounded-[16px] md:w-[659px] md:grid md:grid-cols-[repeat(2,_minmax(242px,_1fr))] md:gap-2 md:content-between">
              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
                <img src={union} alt="" className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]" />

                <div>
                  <h5 className="font-[700] text-[#6d758f]">Unison</h5>

                  <p className="text-[14px] text-[#6d758f]">We thrive to be in harmony and consider ourselves as one family.</p>
                </div>
              </div>

              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
                <img src={excellence} alt="" className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]" />

                <div>
                  <h5 className="font-[700] text-[#6d758f]">Excellence</h5>

                  <p className="text-[14px] text-[#6d758f]">Excellence defines us, our client and our team.</p>
                </div>
              </div>

              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
                <img src={quality} alt="" className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]" />

                <div>
                  <h5 className="font-[700] text-[#6d758f]">Quality</h5>

                  <p className="text-[14px] text-[#6d758f]">We move with the speed of light and tend to deliver at the right time.</p>
                </div>
              </div>

              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
                <img src={speed} alt="" className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]" />

                <div>
                  <h5 className="font-[700] text-[#6d758f]">Speed</h5>

                  <p className="text-[14px] text-[#6d758f]">We move with the speed of light and tend to deliver at the right time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
