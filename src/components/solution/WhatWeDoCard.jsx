// react
import PropTypes from "prop-types"

const WhatWeDoCard = ({ img, title, description }) => {
  return (
    <div className="overflow-hidden rounded-lg px-6 py-10 what-card text-center sm:text-left">
      <img className="object-cover mx-auto sm:mx-0" src={img} alt={title} />
      <div className="font-bold text-xl pt-5 pb-4 text-grey">{title}</div>
      <p className="text-grey text-base mb-8">{description}</p>
      <h1 className="text-lg font-bold">Read More</h1>
    </div>
  )
}

WhatWeDoCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default WhatWeDoCard
