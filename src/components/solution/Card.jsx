import Card1 from "../../assets/images/software.png"
import Card2 from "../../assets/images/devices.png"
import Card3 from "../../assets/images/keyword.png"

const Card = () => {
  return (
    <section className="w-full bg-white pt-0 p-4">
      <div className="md:max-w-[1200px] md:text-center m-auto max-w-[400px]">
        <h1 className="py-4 text-xl font-medium">What we do </h1>
        <p className="text-black text-6xl font-semibold px-56">We Provide World Class Digital Solutions</p>
      </div>
      <div className="md:max-w-[1200px] m-auto max-w-[400px] gap-5">
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="overflow-hidden rounded-lg border-2 border-gray-100">
            <div className="px-6 py-10">
              <img className="object-cover " src={Card1} alt="Software Development" />
              <div className="font-bold text-xl pt-5 pb-2">Software Development</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
              </p>
              <h1 className="inline-block pt-4 text-sm font-semibold text-gray-700 ">Read More</h1>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border-2 border-gray-100">
            <div className="px-6 py-10">
              <img className="object-cover " src={Card2} alt="Software Development" />
              <div className="font-bold text-xl pt-5 pb-2">Design & Innovation</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
              </p>
              <h1 className="inline-block pt-4 text-sm font-semibold text-gray-700 ">Read More</h1>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border-2 border-gray-100">
            <div className="px-6 py-10">
              <img className="object-cover " src={Card3} alt="Software Development" />
              <div className="font-bold text-xl pt-5 pb-2">Research Analysis</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est.
              </p>
              <h1 className="inline-block pt-4 text-sm font-semibold text-gray-700 ">Read More</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
