// IMAGES

import Logo1 from "../../assets/svgs/home/Logo (1).svg"
import Logo2 from "../../assets/svgs/home/Logo (2).svg"
import Logo3 from "../../assets/svgs/home/Logo (3).svg"
import Logo4 from "../../assets/svgs/home/Logo (4).svg"
import Logo5 from "../../assets/svgs/home/Logo (5).svg"
import Logo6 from "../../assets/svgs/home/Logo (6).svg"
import Logo7 from "../../assets/svgs/home/Logo (7).svg"
import Logo8 from "../../assets/svgs/home/Logo (8).svg"
import Logo9 from "../../assets/svgs/home/Logo (9).svg"

const Partners = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-4/5 justify-between items-center py-20 lg:flex md:flex sm:grid">
          <div className="flex flex-col lg:w-2/5 md:w-2/5 sm:w-4/5">
            <h3 className="text-2xl font-medium">Trusted Partners</h3>
            <span className="text-grey font-medium lg:w-4/5 lg:text-sm md:text-sm sm:text-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </span>
          </div>
          <div className="grid grid-cols-3 gap-10 lg:w-2/5 md:w-2/5 sm:w-4/5 mt-5">
            <div>
              <img src={Logo1} alt="" />
            </div>
            <div>
              <img src={Logo2} alt="" />
            </div>
            <div>
              <img src={Logo9} alt="" />
            </div>
            <div>
              <img src={Logo3} alt="" />
            </div>
            <div>
              <img src={Logo4} alt="" />
            </div>
            <div>
              <img src={Logo5} alt="" />
            </div>
            <div>
              <img src={Logo6} alt="" />
            </div>
            <div>
              <img src={Logo7} alt="" />
            </div>
            <div>
              <img src={Logo8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners
