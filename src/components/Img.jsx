//images
import imageone from "../assets/images/group1.png"
import imagetwo from "../assets/images/group2.png"

function Img() {
  return (
    <>
      <div className="md:flex mb-20 w-[95%] mx-auto justify-center">
        <img src={imageone} alt="" className=" w-[100%] md:w-[60%] md:max-h-[468px] md:max-w-[697px]" />
        <img
          src={imagetwo}
          alt=""
          className=" w-[70%] md:w-[40%] md:max-h-[379px] md:max-w-[565px] relative top-[-20px] left-[50px] md:top-[34px] md:left-[-50px]"
        />
      </div>
    </>
  )
}

export default Img
