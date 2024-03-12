// react
import { useEffect, useState } from "react"

// components
import Comment from "../components/about/Comment"

//icons
import { SlArrowRight } from "react-icons/sl"
import { SlArrowLeft } from "react-icons/sl"

const Testimonial = () => {
  var wrapper
  //carousel function
  useEffect(() => {
    // var buttons = document.querySelectorAll(".btn");
    wrapper = document.querySelector("#wrapper")
    // eslint-disable-next-line
  }, [])

  const scroll = () => {
    var max = wrapper.scrollWidth - wrapper.clientWidth
    setLeftStyle(wrapper.scrollLeft <= 0 ? { display: "none" } : null)
    setRightStyle(wrapper.scrollLeft >= max ? { display: "none" } : null)
  }

  useEffect(() => {
    scroll()
    // eslint-disable-next-line
  }, [])

  const right = () => {
    var direction = 1
    var amount = direction * wrapper.clientWidth
    wrapper.scrollBy({ left: amount, behavior: "smooth" })
  }

  const left = () => {
    var direction = -1
    var amount = direction * wrapper.clientWidth
    wrapper.scrollBy({ left: amount, behavior: "smooth" })
  }

  const [leftStyle, setLeftStyle] = useState({})
  const [rightStyle, setRightStyle] = useState({})

  return (
    <div className="majorthree">
      <div className="max-w-[1100px] px-8 py-9 md:px-9 mx-auto">
        <div className="max-w-[538px]">
          <h3 className="text-[29px] md:text-[40px] font-[500]">What our clients have to say</h3>
          <p>
            Discover the stories behind our success. Read testimonials from our clients and learn how our digital solutions have made a
            difference in their businesses.
          </p>
        </div>

        <div className="flex overflow-hidden mt-6 relative">
          <div id="wrapper" className="flex overflow-hidden mt-6" onScroll={scroll}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>

          <button
            onClick={left}
            id="prev"
            className="absolute bottom-[40%] left-[25px] w-[48px] h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center "
            style={leftStyle}
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={right}
            id="next"
            className="absolute bottom-[40%] right-[25px] w-[48px] h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center "
            style={rightStyle}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
