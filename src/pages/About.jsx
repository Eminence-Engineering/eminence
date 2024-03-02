// components
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageChange from "../hooks/PageChange";

const About = () => {
  return (
    <>
      <PageChange />
      <Hero />
      <div>About</div>;
      <Footer />
    </>
  );
};

export default About;
