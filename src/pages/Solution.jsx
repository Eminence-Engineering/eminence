// components
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import CTAs from "../components/CTAs";
import Card from "../components/Card";
import Partners from "../components/Partners";
import ContactCard from "../components/ContactCard";
import PageChange from "../hooks/PageChange";

// images
import bgSolutions from "../assets/images/bg-solutions.png";

const Solution = () => {
  return (
    <>
      <PageChange pageTitle="Our Solutions | Eminence" />
      <Hero bgImg={bgSolutions} pageTitle={"Our Solutions"} />
      <CTA />
      <Card />
      <CTAs />
      <Partners />
      <ContactCard />
      <Footer />
    </>
  );
};

export default Solution;