// components
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageChange from "../hooks/PageChange";
import Abt from "../components/Abt";
import Ser from "../components/Ser";

// images
import bgAbout from "../assets/images/bg-about.png";
import cube from "../assets/images/cube.png";
import design from "../assets/images/design.png";
import branding from "../assets/images/branding.png";
import union from "../assets/images/Union.png";
import excellence from "../assets/images/excellence.png";
import speed from "../assets/images/Speed.png";
import quality from "../assets/images/Quality.png";
import blue from "../assets/images/blueabout.png"
import first from "../assets/images/firstgirl.png"
import second from "../assets/images/secondgirl.png"
import imageone from "../assets/images/group1.png"
import imagetwo from "../assets/images/group2.png"

//icons
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaStar } from "react-icons/fa";


const About = () => {


//carousel function
const start = ()=> {
  
  var buttons = document.querySelectorAll(".btn");
  var wrapper = document.querySelector("#wrapper")

      var direction = 1;

      var amount = direction * wrapper.clientWidth;

      wrapper.scrollBy({left:amount, behavior:"smooth"});
   
}

const start2 = ()=> {
  
  var buttons = document.querySelectorAll(".btn");
  var wrapper = document.querySelector("#wrapper")

      var direction = -1;

      var amount = direction * wrapper.clientWidth;

      wrapper.scrollBy({left:amount, behavior:"smooth"});

   
}


  return (
    <>
      <PageChange pageTitle="About Us | Eminence" />
      <Hero bgImg={bgAbout} pageTitle={"About Us"} />
      <div>
        <div className="md:px-9 py-9 px-8">
          <Abt />

          <div className="lg:flex justify-between pt-4 mb-12">
            <h2 className=" md:w-[664px] md:leading-[60px] md:text-[50px] text-[24px] leading-[30px] font-[700]">GET <span className="text-[#407bff] font-[700]">FIRST HAND</span> EXPERIENCE AND EXPERTISE FROM THE BEST</h2>
            <p className="md:w-[443px] text-[14px] leading-[22px] text-[#6d758f]">Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.</p>
          </div>

          <div className="md:flex mb-20 w-[95%] mx-auto justify-center">
            <img src={imageone} alt="" className=" w-[100%] md:w-[60%] md:max-h-[468px] md:max-w-[697px]"/>
            <img src={imagetwo} alt="" className=" w-[70%] md:w-[40%] md:max-h-[379px] md:max-w-[565px] relative top-[-20px] left-[50px] md:top-[34px] md:left-[-50px]"/>
          </div>

          <div className="four mb-20">

            <div className="leading-[17px] md:leading-[21px] md:text-center  md:w-[600px] md:mx-auto pt-5">
              <h3 className="text-[29px] md:text-[50px] font-[500] leading-[61px]">Our Services</h3>
              <p className="mt-3 text-[#6d758f]">As a company, we provide comprehensive services to support your business by leveraging strategy to drive people, process and information.</p>
            </div>

            <div className="md:flex md:flex-row gap-[10px] md:w-auto md:mx-auto md:max-w-[1100px] flex flex-col mt-2">
              <Ser 
              src = {cube}
              title = "Saas Products"
              content = "We build SaaS for Business and Digitized Companies"
              />

              <Ser 
              src = {design}
              title = "Consultancy"
              content = "Need help in picking out a right project or you are thriving to move in a direction but don’t know how to start? we can help you."
              />

              <Ser 
              src = {branding}
              title = "Maintenance"
              content = "Software maintenance is a more important technique to handle."
              />

            
            </div>

          </div>

          <div className="md:flex md:gap-8 md:items-center mt-9 mb-16">
            <div className="md:w-[450px] mb-4">
                <h3 className="font-[500] text-[29px] md:text-[50px]">
                  Our Core Values
                </h3>
                <p className="leading-[22px] text-[14px] text-[#6d758f]">
                  Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
                </p>
            </div>

            <div className="bg-[#e7ebf2] p-[32px] rounded-[16px] md:w-[659px] md:grid md:grid-cols-[repeat(2,_minmax(242px,_1fr))] md:gap-2 md:content-between">
              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
                <img src={union} alt="" className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"/>

                <div>
                    <h5 className="font-[700] text-[#6d758f]">
                      Unison
                    </h5>

                    <p className="text-[14px] text-[#6d758f]">
                    We thrive to be in harmony and consider ourselves as one family.
                    </p>
                </div>

              </div>

              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
              <img src={excellence} alt=""  className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"/>

                <div>
                    <h5 className="font-[700] text-[#6d758f]">
                      Excellence
                    </h5>

                    <p className="text-[14px] text-[#6d758f]">
                    Excellence defines us, our client and our team.
                    </p>
                </div>

              </div>

              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
              <img src={quality} alt=""  className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"/>

                <div>
                    <h5 className="font-[700] text-[#6d758f]">
                      Quality
                    </h5>

                    <p className="text-[14px] text-[#6d758f]">
                    We move with the speed of light and tend to deliver at the right time.
                    </p>
                </div>

              </div>

              <div className="flex gap-4 mb-2 items-center md:items-start md:flex-col md:w-[242px]">
              <img src={speed} alt=""  className="w-[32px] md:w-[54px] h-[32px] md:h-[54px]"/>

                <div>
                    <h5 className="font-[700] text-[#6d758f]">
                      Speed
                    </h5>

                    <p className="text-[14px] text-[#6d758f]">
                    We move with the speed of light and tend to deliver at the right time.
                    </p>
                </div>

              </div>

            
              
            </div>
            
          </div>

        </div>

        <div className="py-9 px-8 md:px-8" style={{backgroundImage:`url(${blue})`, backgroundRepeat:'no-repeat', backgroundSize:"130% 110%"}}>
          <div className=" max-w-[1100px] md:flex md:gap-5 mx-auto md:justify-between">
          <div className=" max-w-[500px] md:relative">
            <h3 className="text-[#e7ebf2] font-[500] md:text-[40px] md:leading-[49px] text-[25px] leading-[31px]">MEET OUR EXECUTIVES/ ORIGINATORS</h3>
            <p className="text-[#efebf2] text-[10px] leading-[21px] md:text-[18px] md:leading-[36px] md:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum, accusamus expedita soluta rerum rem dolor doloribus nostrum maiores odio.</p>
            <div className="pt-8 flex">
              <button className="w-[48px] h-[48px] rounded-[50%] border-2 border-white text-white hover:bg-white hover:text-[#3a4f38] me-4 flex justify-center items-center">  <SlArrowLeft /></button>
              <button className="w-[48px] h-[48px] rounded-[50%] bg-white text-[#3a4f39] hover:bg-transparent hover:text-white hover:border-2 hover:border-white flex justify-center items-center"><SlArrowRight /></button>
            </div>
          </div>

          <div className="md:flex md:gap-5 mt-6 md:mt-0">

          <div className="p-4 bg-white max-w-[327px] mb-[20px] md:mb-0 shrink-1 md:self-start">
                <img src={first} alt="" />

                <div className="flex justify-between mt-4 ">
                    <div>
                      <h5 className="text-[#2d2e2e]">Anna Smith</h5>
                      <h6 className="text-[#ababab]">designer</h6>
                    </div>

                    <div className="flex gap-4">
                      <FaInstagram />
                      <BiLogoFacebook />
                    </div>
                </div>
              

            </div>

              <div className="p-4 bg-white max-w-[327px] mb-[20px] md:mb-0 shrink-1 md:self-start">
                  <img src={second} alt="" />
                  <div className="flex justify-between mt-4">
                      <div>
                        <h5 className="text-[#2d2e2e]">Anna Smith</h5>
                        <h6 className="text-[#ababab]">designer</h6>
                      </div>

                      <div className="flex gap-4">
                        <FaInstagram />
                        <BiLogoFacebook />
                   </div>
                </div>  
              

            </div>


          </div>

          </div>
        </div>
       
        <div className="majorthree">
          <div className="max-w-[1100px] px-8 py-9 md:px-9 mx-auto">
            <div className="max-w-[538px]">
              <h3 className="text-[29px] md:text-[40px] font-[500]">What our clients have to say</h3>
              <p>Discover the stories behind our success. Read testimonials from our clients and learn how our digital solutions have made a difference in their businesses.</p>
            </div>

            <div className="flex overflow-hidden mt-6 relative" >
               
               <div id = "wrapper" className="flex overflow-hidden mt-6">
               <div className="border-2 border-grey max-w-[358px] p-[10px] rounded-lg flex flex-col gap-4 relative basis-[358px] shrink-0 mb-2">
                  <div className="flex text-[#d4af37] gap-3 text-[24px]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p>
                  heir communication throughout the project was exceptional, and we couldn't be happier with the outcome.
                  </p>

                  <h5>
                    Brian Clark
                  </h5>

                  <p className="mt-[-10px]">
                  VP of Marketing at Snapchat
                  </p>

                </div>

                <div className="border-2 border-grey max-w-[358px] p-[10px] rounded-lg flex flex-col gap-4 relative basis-[358px] shrink-0 mb-2">
                  <div className="flex text-[#d4af37] gap-3 text-[24px]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p>
                  heir communication throughout the project was exceptional, and we couldn't be happier with the outcome.
                  </p>

                  <h5>
                    Brian Clark
                  </h5>

                  <p className="mt-[-10px]">
                  VP of Marketing at Snapchat
                  </p>

                </div>

                <div className="border-2 border-grey max-w-[358px] p-[10px] rounded-lg flex flex-col gap-4 relative basis-[358px] shrink-0 mb-2">
                  <div className="flex text-[#d4af37] gap-3 text-[24px]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p>
                  heir communication throughout the project was exceptional, and we couldn't be happier with the outcome.
                  </p>

                  <h5>
                    Brian Clark
                  </h5>

                  <p className="mt-[-10px]">
                  VP of Marketing at Snapchat
                  </p>

                </div>

                <div className="border-2 border-grey max-w-[358px] p-[10px] rounded-lg flex flex-col gap-4 relative basis-[358px] shrink-0 mb-2">
                  <div className="flex text-[#d4af37] gap-3 text-[24px]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <p>
                  heir communication throughout the project was exceptional, and we couldn't be happier with the outcome.
                  </p>

                  <h5>
                    Brian Clark
                  </h5>

                  <p className="mt-[-10px]">
                  VP of Marketing at Snapchat
                  </p>

                </div>
              
               </div>

           

                
                    <button onClick={start2} id="prev" className="absolute top-[40%] left-[25px] w-[48px] h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center "  ><SlArrowLeft /></button>
                    <button onClick={start} id="next" className="absolute top-[40%] right-[25px] w-[48px] h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center "  ><SlArrowRight /></button>
               
              </div>
          </div>
          
        </div>

      </div>
      <Footer />
    </>
  );
};

export default About;
