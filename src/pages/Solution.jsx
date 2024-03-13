// components
import PageChange from "../hooks/PageChange"
import Hero from "../components/Hero"
import WhoWeAre from "../components/solution/WhoWeAre"
import WhatWeDo from "../components/solution/WhatWeDo"
import CallToAction from "../components/solution/CallToAction"
import Partners from "../components/Partners"
import ContactCard from "../components/solution/ContactCard"
import Footer from "../components/Footer"

// images
import bgSolutions from "../assets/images/bg-solutions.png"

const Solution = () => {
  return (
    <>
      <PageChange pageTitle="Our Solutions | Eminence" />
      <Hero bgImg={bgSolutions} pageTitle={"Our Solutions"} />
      <WhoWeAre />
      <WhatWeDo />
      <CallToAction />
      <Partners />
      <ContactCard />
      <Footer />
    </>
  )
}

export default Solution
