// components
import Header from "../HeaderWhite"

// images
import hero from "../../assets/images/home/hero.png"

const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-home lg:pt-6 flex flex-col">
        <Header />

        <div className="container p-5 pt-16 pb-0 flex-1 flex flex-col lg:flex-row lg:items-end justify-between gap-20">
          <div className="lg:max-w-md xl:max-w-[497px] 2xl:max-w-2xl lg:pb-32">
            <h1 className="text-white text-4xl md:text-[56px] md:leading-tight font-semibold mb-6">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-white font-medium mb-10">
              Your success story starts here. Harness the expertise of <span className="font-bold">Eminence</span> to revolutionize your
              digital strategy and achieve unparalleled growth.
            </p>
            <form className="h-12 sm:h-16 flex gap-3">
              <input className="rounded-[40px] font-medium h-full px-5 w-full" type="email" name="email" placeholder="Enter Your Email" />
              <button
                type="submit"
                className="font-medium text-white text-base sm:text-lg border-white border rounded-[70px] whitespace-nowrap px-5 sm:px-9"
              >
                Let's Talk
              </button>
            </form>
          </div>
          <div className="">
            <img src={hero} className="w-full" alt="hero-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
