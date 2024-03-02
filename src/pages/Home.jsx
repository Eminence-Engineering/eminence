// components

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageChange from "../hooks/PageChange";

const Home = () => {
  return (
    <>
      <PageChange />
      <Hero />
      <div>Home</div>;
      <Footer />
    </>
  );
};

export default Home;
