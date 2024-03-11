import service from "../../assets/svgs/Home/service.svg"
import service1 from "../../assets/svgs/Home/service(1).svg"
import service2 from "../../assets/svgs/Home/service(2).svg"
import service3 from "../../assets/svgs/Home/service(3).svg"

const About = () => {
  return (
    <>
      <div className="py-16 flex justify-center items-center">
        <div className="lg:flex md:grid sm:grid items-start justify-around w-4/5">
          <div className="lg:w-4/12 md:full sm:full flex flex-col gap-6">
            <h1 className="text-4xl font-medium w-4/5">What The Company Is Made Of</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur. Nibh adipiscing ac donec nisl neque convallis. Quam leo enim ac semper velit fringilla
              accumsan magnis est.
            </span>
          </div>
          <div className="lg:w-5/12 md:full sm:full lg:flex md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 lg:flex-col items-start mt-5">
            <div className="flex h-fit items-start gap-4 py-5">
              <div className="bg-primary p-4 rounded-lg">
                <img src={service} width={"35px"} alt="" />
              </div>
              <div className="grid">
                <h4 className="font-medium text-xl">Software Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex h-fit items-start gap-4 py-5">
              <div className="bg-primary p-4 rounded-lg">
                <img src={service1} width={"35px"} alt="" />
              </div>
              <div className="grid">
                <h4 className="font-medium text-xl">Design And Innovation Hub</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex h-fit items-start gap-4 py-5">
              <div className="bg-primary p-4 rounded-lg">
                <img src={service2} width={"35px"} alt="" />
              </div>
              <div className="grid">
                <h4 className="font-medium text-xl">Manufacturing</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex h-fit items-start gap-4 py-5">
              <div className="bg-primary p-4 rounded-lg">
                <img src={service3} width={"35px"} alt="" />
              </div>
              <div className="grid">
                <h4 className="font-medium text-xl">Research Analysis</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
