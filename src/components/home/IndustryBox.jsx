// react
import PropTypes from "prop-types"

const IndustryBox = ({ title, description, img, isLast }) => {
  return (
    <div
      className={
        isLast
          ? "bg-card px-5 md:px-6 py-9 md:py-10 rounded-lg lg:col-span-3"
          : "bg-card px-5 md:px-6 py-9 md:py-10 rounded-lg lg:col-span-2"
      }
    >
      <img src={img} alt="industry-logo" className="w-12 md:w-14 mb-5 md:mb-6" />
      <h3 className="font-bold text-xl text-grey mb-4">{title}</h3>
      <p className="text-grey text-sm">{description}</p>
    </div>
  )
}

IndustryBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isLast: PropTypes.bool
}

export default IndustryBox
