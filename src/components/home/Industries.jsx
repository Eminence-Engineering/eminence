// IMAGES

import ux1 from "../../assets/svgs/Home/ux 1.svg"
import app from "../../assets/svgs/Home/app-development 1.svg"
import ui1 from "../../assets/svgs/Home/ui-design 1.svg"
import cubes from "../../assets/svgs/Home/cubes 1.svg"
import design from "../../assets/svgs/Home/design 1.svg"
import branding from "../../assets/svgs/Home/branding 1.svg"

const Industries = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-4/5 flex flex-col items-center">
          <div className="flex flex-col justify-center items-center gap-3 py-3 lg:text-center md:text-center">
            <h1 className="text-4xl font-medium text-darkgrey">Industries We Provide Services For</h1>
            <span className="text-grey lg:w-3/5 md:w-4/5 sm:w-4/5 text-sm">
              Empower your brand with our comprehensive digital offerings. Whether you need web design, SEO, or content creation, we have
              the expertise to take your digital strategy to the next level.
            </span>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded">
              <img src={ux1} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">SMEs</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
            <div className="bg-card p-6 rounded">
              <img src={app} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">Agriculture</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
            <div className="bg-card p-6 rounded">
              <img src={ui1} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">FInance</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
            <div className="bg-card p-6 rounded">
              <img src={cubes} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">E-commerce</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
            <div className="bg-card p-6 rounded">
              <img src={design} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">E-education</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
            <div className="bg-card p-6 rounded">
              <img src={branding} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">Healthcare</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
          </div>
          <div className="grid gap-4 py-4 lg:grid-cols-2 md:grid-cols-2">
            <div className="bg-card p-6 rounded">
              <img src={cubes} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">Real Estate</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
            <div className="bg-card p-6 rounded">
              <img src={design} width={"30px"} alt="" />
              <h3 className="font-semibold text-grey">Logistics</h3>
              <small className="text-grey">
                Lorem ipsum dolor sit amet consecte tur quet adipiscing elit semper dalaracc lacus vel ams facilisis volutpat est
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Industries
