// components
import IndustryList from "./IndustryList"
import IndustryBox from "./IndustryBox"

const Industries = () => {
  return (
    <section className="container p-5 py-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-[50px] md:leading-tight font-medium mb-3 text-darkgrey">Industries We Provide Services For</h1>
        <p className="max-w-2xl mx-auto text-grey text-base md:text-lg mb-7">
          Empower your brand with our comprehensive digital offerings. Whether you need web design, SEO, or content creation, we have the
          expertise to take your digital strategy to the next level.
        </p>
      </div>

      <div className="grid lg:grid-cols-6 sm:grid-cols-2 gap-x-5 gap-y-6">
        {IndustryList.map((industry, index) => (
          <IndustryBox key={index} {...industry} />
        ))}
      </div>
    </section>
  )
}

export default Industries
