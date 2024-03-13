// images
import force from "../../assets/images/forcefields.png"

const ContactCard = () => {
  return (
    <section className="relative text-black pt-24">
      <div className="px-0 md:px-5">
        <div className="container bg-white flex flex-col md:flex-row items-center justify-between gap-6 md:rounded-2xl z-40 relative md:-bottom-24 contact-card md:px-20 py-16">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-medium text-black mb-4"> Contact Us </h1>
            <p className="text-2xl md:text-3xl font-semibold text-black mb-4">Get In Touch With Us</p>
            <div className="flex-grow max-w-24 border-2 border-primary mx-auto md:mx-0"></div>
          </div>

          <div className="hidden lg:block">
            <img src={force} alt="hero" />
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg text-black mb-6">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="w-full max-w-48 text-lg font-bold rounded-lg px-8 text-white py-3 bg-primary mx-auto md:mx-0">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-32 bg-primary hidden md:block relative -bottom-1"></div>
    </section>
  )
}

export default ContactCard
