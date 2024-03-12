//images
import imageone from "../../assets/images/about/group1.png"
import imagetwo from "../../assets/images/about/group2.png"

function AboutImage() {
  return (
    <section className="container p-5 py-10 md:py-16">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full">
          <img src={imageone} alt="about-image" className="w-full" />
        </div>
        <div className="w-[70%] relative top-[-20px] md:top-0 left-0 md:left-[-50px]">
          <img src={imagetwo} alt="about-image" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default AboutImage
