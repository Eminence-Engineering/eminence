// components
import ServiceBox from "./ServiceBox"
import ServiceList from "./ServiceList"

const About = () => {
  return (
    <section className="container p-5 py-16 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
      <div className="lg:max-w-md 2xl:max-w-2xl">
        <h1 className="text-3xl md:text-[50px] md:leading-tight font-medium mb-4">What The Company Is Made Of</h1>
        <p className="font-medium text-base md:text-lg text-black/60">
          Lorem ipsum dolor sit amet consectetur. Nibh adipiscing ac donec nisl neque convallis. Quam leo enim ac semper velit fringilla
          accumsan magnis est.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {ServiceList.map((service, index) => (
          <ServiceBox key={index} title={service.title} description={service.description} img={service.img} />
        ))}
      </div>
    </section>
  )
}

export default About
