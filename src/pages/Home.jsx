// components
import Footer from "../components/Footer"
import PageChange from "../hooks/PageChange"
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import Industries from "../components/home/Industries"
import Partners from "../components/home/Partners"
import Executives from "../components/Executives"
import Testimonial from "../components/Testimonial"

const Home = () => {
  return (
    <>
      <PageChange pageTitle="Eminence - Transforming Ideas into Digital Reality" />
      <Hero />
      <Services />
      <Industries />
      <Partners />
      <Executives />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
