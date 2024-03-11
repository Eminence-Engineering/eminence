// components

import Footer from "../components/Footer";
import PageChange from "../hooks/PageChange";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Industries from "../components/Home/Industries";
import Partners from "../components/Home/Partners";
import Executives from "../components/Home/Executives";


const Home = () => {
  return (
    <>
      <PageChange pageTitle="Eminence - Transforming Ideas into Digital Reality" />
      <Hero />
      <About />
      <Industries />
      <Partners />
      <Executives />
      <Footer />
    </>
  );
};

export default Home;
