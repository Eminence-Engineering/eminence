// react
import PropTypes from "prop-types"

// icons
import { FaStar, FaRegStar } from "react-icons/fa"

function TestimonialCard({ name, position, message, stars }) {
  return (
    <>
      <div className="border border-[#e1e4ed] max-w-[358px] p-5 rounded-lg relative basis-[358px] shrink-0 testimonial-card">
        <div className="flex gap-3 text-[24px] mb-7">
          {Array.from({ length: 5 }, (_, index) => (index < stars ? 1 : 0)).map((star, index) =>
            star === 1 ? <FaStar key={index} className="text-[#d4af37]" /> : <FaRegStar key={index} className="text-[#d4af37]" />
          )}
        </div>
        <p className="text-sm text-grey mb-6">{message}</p>
        <h5 className="font-semibold text-grey text-lg mb-1">{name}</h5>
        <p className="text-base text-[#B4B9C9]">{position}</p>
      </div>
    </>
  )
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default TestimonialCard
