// react
import PropTypes from "prop-types"

const PartnerBox = ({ img }) => {
  return (
    <div
      className="p-4 sm:p-5  rounded-lg border-[0.52px] border-[
  #f1f3f7] flex place-content-center partner-image"
    >
      <img src={img} alt="partner-logo" className="h-[20px] md:h-[30px]" />
    </div>
  )
}

PartnerBox.propTypes = {
  img: PropTypes.string.isRequired
}

export default PartnerBox
