// components
import WhatWeDoCard from "./WhatWeDoCard"
import WhatWeDoList from "./WhatWeDoList"

const WhatWeDo = () => {
  return (
    <section className="container w-full bg-white py-10 p-5">
      <div className="text-center mb-20">
        <h1 className="text-xl font-medium mb-6">What we do </h1>
        <p className="text-black text-3xl md:text-[56px] md:leading-tight font-semibold md:max-w-3xl md:mx-auto mb-7">
          We Provide World Class Digital Solutions
        </p>
        <div className="max-w-24 mx-auto border-2 border-blue-800"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {WhatWeDoList.map((item, index) => (
          <WhatWeDoCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default WhatWeDo
