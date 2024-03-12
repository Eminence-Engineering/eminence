// components
import ServiceCard from "./ServiceCard"
import ServiceList from "./ServiceList"

const Services = () => {
  return (
    <section className="container p-5 py-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-[50px] md:leading-tight font-medium mb-3 text-darkgrey">Our Services</h1>
        <p className="max-w-2xl mx-auto text-grey text-base md:text-lg mb-7">
          As a company, we provide comprehensive services to support your business by leveraging strategy to drive people, process, and
          information.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-6">
        {ServiceList.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
