// components

import Footer from "../components/Footer"
import PageChange from "../hooks/PageChange"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Industries from "../components/home/Industries"
import Partners from "../components/home/Partners"
import Executives from "../components/home/Executives"

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
  )
}

export default Home
