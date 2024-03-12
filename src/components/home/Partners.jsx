// components
import PartnerBox from "./PartnerBox"
import PartnerList from "./PartnerList"

const Partners = () => {
  return (
    <section className="container p-5 py-16 flex flex-col lg:flex-row items-center justify-between gap-20">
      <div className="md:max-w-[340px] md:mx-auto">
        <h3 className="text-3xl font-medium mb-2">Trusted Partners</h3>
        <span className="text-grey font-medium">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</span>
      </div>

      <div className="grid grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-4">
        {PartnerList.map((partner, index) => (
          <PartnerBox key={index} {...partner} />
        ))}
      </div>
    </section>
  )
}

export default Partners
