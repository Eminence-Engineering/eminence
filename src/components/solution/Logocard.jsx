// react
import PropTypes from "prop-types"

const Logocard = ({ logo }) => {
  return <div className="category bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-center">{logo}</div>
}

Logocard.propTypes = {
  logo: PropTypes.element.isRequired
}

export default Logocard
