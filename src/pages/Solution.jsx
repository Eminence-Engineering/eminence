// components
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import WhoWeAre from "../components/solution/WhoWeAre"
import CTAs from "../components/solution/CTAs"
import Card from "../components/solution/Card"
import ContactCard from "../components/solution/ContactCard"
import PageChange from "../hooks/PageChange"

// images
import bgSolutions from "../assets/images/bg-solutions.png"
import Partners from "../components/Partners"

const Solution = () => {
  return (
    <>
      <PageChange pageTitle="Our Solutions | Eminence" />
      <Hero bgImg={bgSolutions} pageTitle={"Our Solutions"} />
      <WhoWeAre />
      <Card />
      <CTAs />
      <Partners />
      <ContactCard />
      <Footer />
    </>
  )
}

export default Solution
