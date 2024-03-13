import Img from "../../assets/images/Solution.png"

const CTAs = () => {
  return (
    <section className="w-full bg-white py-24 p-4">
      <div className="md:max-w-full m-auto grid md:grid-cols-2 max-w-[400px]">
        <img src={Img} alt="hero" className="w-[450px] mx-auto" />
        <div className="flex flex-col justify-center gap-4">
          <h1 className="py-2 text-5xl font-semibold text-black">We're Professional IT Solutions Agency</h1>
          <p className="py-2 pr-40 text-lg text-black">
            Lorem ipsum dolor sit amet consectetur. Pretium dolor amet fames non morbi luctus id aliquet.
          </p>

          <button className="w-full max-w-48 text-base rounded-lg ... px-8 text-white py-3 bg-[#0E387A]">Sign up for free</button>
        </div>
      </div>
    </section>
  )
}

export default CTAs
