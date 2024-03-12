// react
import PropTypes from "prop-types"

//icons
import { FaInstagram } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"

function Socials({ src }) {
  return (
    <div className="p-4 bg-white max-w-[327px] md:self-start">
      <img src={src} alt="executive-image" className="w-full" />

      <div className="flex justify-between mt-4 ">
        <div>
          <h5 className="text-[#2d2e2e]">Anna Smith</h5>
          <p className="text-[#ababab]">designer</p>
        </div>

        <div className="flex gap-4">
          <FaInstagram />
          <BiLogoFacebook />
        </div>
      </div>
    </div>
  )
}

Socials.propTypes = {
  src: PropTypes.string
}

export default Socials
