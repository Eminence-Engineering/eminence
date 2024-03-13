// components
import PageChange from "../hooks/PageChange"
import Hero from "../components/Hero"
import WhoWeAre from "../components/solution/WhoWeAre"
import WhatWeDo from "../components/solution/WhatWeDo"
import CTAs from "../components/solution/CTAs"
import ContactCard from "../components/solution/ContactCard"
import Footer from "../components/Footer"

// images
import bgSolutions from "../assets/images/bg-solutions.png"
import Partners from "../components/Partners"

const Solution = () => {
  return (
    <>
      <PageChange pageTitle="Our Solutions | Eminence" />
      <Hero bgImg={bgSolutions} pageTitle={"Our Solutions"} />
      <WhoWeAre />
      <WhatWeDo />
      <CTAs />
      <Partners />
      <ContactCard />
      <Footer />
    </>
  )
}

export default Solution
