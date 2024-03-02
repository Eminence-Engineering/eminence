// components

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageChange from "../hooks/PageChange";

const Home = () => {
  return (
    <>
      <PageChange pageTitle="Eminence - Transforming Ideas into Digital Reality" />
      <Hero />
      <div>Home</div>
      <Footer />
    </>
  );
};

export default Home;
