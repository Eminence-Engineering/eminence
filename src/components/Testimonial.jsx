// react
import { useEffect, useState, useRef } from "react"

// components
import TestimonialCard from "./TestimonialCard"

//icons
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"
import TestimonialList from "./TestimonialList"

const Testimonial = () => {
  const [leftStyle, setLeftStyle] = useState({})
  const [rightStyle, setRightStyle] = useState({})

  const wrapperRef = useRef(null)

  //carousel function
  const scroll = () => {
    let max = wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth
    setLeftStyle(wrapperRef.current.scrollLeft <= 0 ? { display: "none" } : null)
    setRightStyle(wrapperRef.current.scrollLeft >= max ? { display: "none" } : null)
  }

  useEffect(() => {
    scroll()
    // eslint-disable-next-line
  }, [])

  const right = () => {
    let direction = 1
    let amount = direction * wrapperRef.current.clientWidth
    wrapperRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  const left = () => {
    let direction = -1
    let amount = direction * wrapperRef.current.clientWidth
    wrapperRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="">
      <div className="container p-5 pt-16 pb-32">
        <div className="max-w-xl">
          <h3 className="text-3xl md:text-[40px] font-medium text-grey mb-6">What our clients have to say</h3>
          <p className="text-grey">
            Discover the stories behind our success. Read testimonials from our clients and learn how our digital solutions have made a
            difference in their businesses.
          </p>
        </div>

        <div className="flex overflow-hidden mt-6 relative">
          <div id="wrapper" className="flex overflow-hidden mt-6 gap-10" onScroll={scroll} ref={wrapperRef}>
            {TestimonialList.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <button
            onClick={left}
            id="prev"
            className="absolute bottom-4 md:bottom-[40%] left-2 md:left-[25px] w-7 md:w-[48px] h-7 md:h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center text-sm md:text-base"
            style={leftStyle}
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={right}
            id="next"
            className="absolute bottom-4 md:bottom-[40%] right-2 md:right-[25px] w-7 md:w-[48px] h-7 md:h-[48px] rounded-[50%] hover:bg-white text-white bg-primary hover:text-primary hover:border-2 hover:border-primary flex justify-center items-center text-sm md:text-base"
            style={rightStyle}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
