import PropTypes from "prop-types"

function Ser(props) {
  return (
    <>
      <div className="sm:w-[95%] max-w-[354px] md:w-[354px] min-h-[242px] bg-[#e7ebf2] flex flex-col gap-[10px] px-[24px] py-[40px] rounded-[8px]">
        <img src={props.src} alt="" className="w-[54px]" />
        <h4 className="text-[20px] font-[700] text-[#6d758f]">{props.title}</h4>
        <p className="text-[14px] text-[#6d758f]">{props.content}</p>
      </div>
    </>
  )
}

Ser.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
}
export default Ser
