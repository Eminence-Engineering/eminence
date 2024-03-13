import Logo1 from "../../assets/images/Logo1.png"
import Logo2 from "../../assets/images/Logo2.png"
import Logo3 from "../../assets/images/Logo3.png"
import Logo4 from "../../assets/images/Logo4.png"
import Logo5 from "../../assets/images/Logo5.png"
import Logo6 from "../../assets/images/Logo6.png"
import Logo7 from "../../assets/images/Logo7.png"
import Logo8 from "../../assets/images/Logo8.png"
import Logo9 from "../../assets/images/Logo9.png"

// components
import Logo from "./Logocard"

const Partners = () => {
  return (
    <section className="w-full bg-white pt-1 pb-10 p-4">
      <div className="md:max-w-[1200px] m-auto grid md:grid-cols-2 max-w-[400px]">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-semibold text-black">Trusted Partners</h1>
          <p className="pr-60 text-base text-[#6D758F]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
        </div>

        <div className="grid md:grid-cols-3 py-12 gap-x-6 gap-y-8">
          <Logo logo={<img src={Logo1} alt="Logo1" />} />
          <Logo logo={<img src={Logo2} alt="Logo1" />} />
          <Logo logo={<img src={Logo3} alt="Logo1" />} />
          <Logo logo={<img src={Logo4} alt="Logo1" />} />
          <Logo logo={<img src={Logo5} alt="Logo1" />} />
          <Logo logo={<img src={Logo6} alt="Logo1" />} />
          <Logo logo={<img src={Logo7} alt="Logo1" />} />
          <Logo logo={<img src={Logo8} alt="Logo1" />} />
          <Logo logo={<img src={Logo9} alt="Logo1" />} />
        </div>
      </div>
    </section>
  )
}

export default Partners
