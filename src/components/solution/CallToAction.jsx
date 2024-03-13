// image
import Img from "../../assets/images/Solution.png"

const CallToAction = () => {
  return (
    <section className="container w-full bg-white py-24 p-5">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
        <img src={Img} alt="hero" className="w-full lg:max-w-xl mx-auto" />
        <div className="flex flex-col justify-center gap-8 text-center md:text-left">
          <h1 className="text-3xl md:text-[56px] md:leading-tight font-semibold text-black">Our HR Solution</h1>
          <p className="text-lg text-black">
            Lorem ipsum dolor sit amet consectetur. Enim commodo quis tincidunt tortor pharetra. Feugiat malesuada aliquam vehicula amet
            magna mattis sollicitudin bibendum. Sollicitudin rhoncus et mi etiam. Duis purus amet ac enim iaculis tempor tellus. Facilisis
            erat turpis ac maecenas ac vulputate.
          </p>

          <button className="w-full max-w-48 text-base font-semibold rounded-lg px-8 text-white py-3 bg-primary mx-auto md:mx-0">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
