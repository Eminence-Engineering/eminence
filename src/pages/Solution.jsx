// components
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PageChange from "../hooks/PageChange";

// images
import bgSolutions from "../assets/images/bg-solutions.png";

const Solution = () => {
  return (
    <>
      <PageChange pageTitle="Our Solutions | Eminence" />
      <Hero bgImg={bgSolutions} pageTitle={"Our Solutions"} />
      <div>Solution</div>
      <Footer />
    </>
  );
};

export default Solution;
