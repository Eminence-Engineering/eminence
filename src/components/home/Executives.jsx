// IMAGES

import group from "../../assets/images/home/Group.png"
import exec1 from "../../assets/images/home/exec (1).png"
import exec2 from "../../assets/images/home/exec (2).png"
import instagram from "../../assets/svgs/home/instagram.svg"
import facebook from "../../assets/svgs/home/facebook.svg"
import right from "../../assets/svgs/home/right.svg"
import left from "../../assets/svgs/home/left.svg"

const Executives = () => {
  return (
    <>
      <div className="bg-primary">
        <div
          className="flex justify-center align-center py-20"
          style={{ backgroundImage: group, backgroundPosition: "left", backgroundSize: "contain" }}
        >
          <div className="w-4/5 justify-between items-start gap-10 lg:flex md:grid sm:grid">
            <div className="flex flex-col gap-4 lg:w-4/12 md:w-4/5 sm:w-4/5">
              <h1 className="text-white text-2xl font-meduium">MEET OUR EXECUTIVES/ORIGINATORS</h1>
              <span className="text-white font-medium text-small">
                Lorem ipsum dolor sit amet consectetur. Nibh adipiscing ac donec nisl neque convallis. Quam leo enim ac semper velit
                fringilla accumsan magnis est.
              </span>
              <div className="flex gap-6">
                <img className="cursor-pointer" src={left} alt="" />
                <img className="cursor-pointer" src={right} alt="" />
              </div>
            </div>
            <div className="justify-around lg:flex md:flex sm:flex lg:w-1/2">
              <div className="flex flex-col items-center bg-white p-4 my-5 rounded lg:w-2/5 md:w-2/5 sm:h-11/12">
                <img className="w-11/12" src={exec1} alt="" />
                <div className="flex justify-between w-11/12">
                  <h5>Anna Smith</h5>
                  <div className="flex">
                    <a href="">
                      <img className="m-1" src={instagram} width={"15px"} alt="" />
                    </a>
                    <a href="">
                      <img className="m-1" src={facebook} width={"10px"} alt="" />
                    </a>
                  </div>
                </div>
                <span className="text-grey text-sm w-11/12">designer</span>
              </div>
              <div className="flex flex-col items-center bg-white p-4 my-5 rounded lg:w-2/5 md:w-2/5 sm:h-11/12">
                <img className="w-11/12" src={exec2} alt="" />
                <div className="flex justify-between w-11/12">
                  <h5>Anna Smith</h5>
                  <div className="flex">
                    <a href="">
                      <img className="m-1" src={instagram} width={"15px"} alt="" />
                    </a>
                    <a href="">
                      <img className="m-1" src={facebook} width={"10px"} alt="" />
                    </a>
                  </div>
                </div>
                <span className="text-grey text-sm w-11/12">designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Executives
