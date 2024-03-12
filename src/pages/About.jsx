// components
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import PageChange from "../hooks/PageChange"
import AboutTitle from "../components/about/AboutTitle"
import AboutDescription from "../components/about/AboutDescription"
import AboutImage from "../components/about/AboutImage"
import Services from "../components/about/Services"
import CoreValues from "../components/about/CoreValues"
import Executives from "../components/Executives"

// images
import bgAbout from "../assets/images/bg-about.png"
import Testimonial from "../components/Testimonial"

const About = () => {
  return (
    <>
      <PageChange pageTitle="About Us | Eminence" />
      <Hero bgImg={bgAbout} pageTitle={"About Us"} />
      <AboutTitle />
      <AboutDescription />
      <AboutImage />
      <Services />
      <CoreValues />
      <Executives />
      <Testimonial />
      <Footer />
    </>
  )
}

export default About
