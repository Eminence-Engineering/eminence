//

import Header from "../HeaderWhite"

// image
import hero from "../../assets/images/Home/hero.png"

const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-primary grid justify-center align-center">
        <Header />
        <div className="flex items-center justify-center w-full">
          <div className="relative lg:flex md:flex sm:grid justify-between pt-16 w-4/5 h-full">
            <div className="grid lg:w-2/5 md:w-2/5 sm:w-full h-5/6 gap-5">
              <h1 className="text-white text-5xl font-semibold">Transforming Ideas into Digital Reality</h1>
              <p className="text-white font-medium">
                Your success story starts here. Harness the expertise of <span className="font-semibold">Eminence</span> to revolutionize
                your digital strategy and achieve unparalleled growth.
              </p>
              <div className="flex justify-between h-12">
                <input className="w-3/5 rounded-full pl-4 font-semibold" type="text" name="" id="" placeholder="Enter Your Email" />
                <button className="w-1/4 font-medium text-white border-white border rounded-full">Lets Talk</button>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 sm:w-full lg:h-full md:h-4/5 md:absolute md:bottom-0 md:right-0 flex align-end">
              <img src={hero} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
