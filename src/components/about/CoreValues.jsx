import CoreValueCard from "./CoreValueCard"
import CoreValueList from "./CoreValueList"

const CoreValues = () => {
  return (
    <section className="container p-5 py-16 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
      <div className="lg:max-w-[407px] 2xl:max-w-2xl lg:pt-20">
        <h1 className="text-3xl md:text-[50px] md:leading-tight font-medium mb-4">Our Core Values</h1>
        <p className="font-medium text-base md:text-lg text-black/60">
          Lorem ipsum dolor sit amet consectetur. Nibh adipiscing ac donec nisl neque convallis. Quam leo enim ac semper velit fringilla
          accumsan magnis est.
        </p>
      </div>

      <div className="bg-card p-5 md:px-8 py-10 rounded-lg flex flex-col gap-5 md:max-w-[680px] md:grid md:grid-cols-2 md:gap-5 xl:gap-x-20 md:content-between">
        {CoreValueList.map((value, index) => (
          <CoreValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  )
}

export default CoreValues
