// components
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageChange from "../hooks/PageChange";

// images
import bgAbout from "../assets/images/bg-about.png";

const About = () => {
  return (
    <>
      <PageChange pageTitle="About Us | Eminence" />
      <Hero bgImg={bgAbout} pageTitle={"About Us"} />
      <div>About</div>;
      <Footer />
    </>
  );
};

export default About;
