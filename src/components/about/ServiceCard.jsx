// react
import PropTypes from "prop-types"

const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="bg-card px-5 md:px-6 py-9 md:py-10 rounded-lg">
      <img src={img} alt="industry-logo" className="w-12 md:w-14 mb-5 md:mb-6" />
      <h3 className="font-bold text-xl text-grey mb-4">{title}</h3>
      <p className="text-grey text-sm">{description}</p>
    </div>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default ServiceCard
