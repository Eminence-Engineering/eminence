//icons
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"

import PropTypes from "prop-types"

function Socials({ src }) {
  return (
    <>
      <div className="p-4 bg-white max-w-[327px] mb-[20px] md:mb-0 shrink-1 md:self-start">
        <img src={src} alt="" />

        <div className="flex justify-between mt-4 ">
          <div>
            <h5 className="text-[#2d2e2e]">Anna Smith</h5>
            <h6 className="text-[#ababab]">designer</h6>
          </div>

          <div className="flex gap-4">
            <FaInstagram />
            <BiLogoFacebook />
          </div>
        </div>
      </div>
    </>
  )
}

Socials.propTypes = {
  src: PropTypes.string
}

export default Socials
