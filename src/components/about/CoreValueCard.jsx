// react
import PropTypes from "prop-types"

const CoreValueCard = ({ title, description, img }) => {
  return (
    <div className="flex gap-5 items-center md:items-start md:flex-col">
      <img src={img} alt="" className="w-8 md:w-14 h-8 md:h-14" />
      <div>
        <h5 className="font-bold text-base md:text-xl text-black md:text-grey">{title}</h5>
        <p className="text-[13px] md:text-sm text-black/60 md:text-grey">{description}</p>
      </div>
    </div>
  )
}

CoreValueCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default CoreValueCard
