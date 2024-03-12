// react
import PropTypes from "prop-types"

const ServiceBox = ({ title, description, img }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="bg-home rounded-xl p-2 w-16 md:w-24 h-16 md:h-24 flex place-content-center">
        <img src={img} alt="service-logo" className="w-[27px] md:w-[46px]" />
      </div>
      <div>
        <h4 className="font-medium text-lg md:text-3xl">{title}</h4>
        <p className="text-black/60 text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

ServiceBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default ServiceBox
