import force from '../assets/images/forcefields.png'

const ContactCard = () => {
    return (
      <section className="relative bg-white text-black lg:rounded-2xl shadow-inner flex items-center justify-between gap-6 px-24 p-5 md:py-7 z-50 max-w-6xl -mb-4 z-40 mx-auto">
          <div className='p-4 ' >
            <h1 className='py-2 text-xl font-semibold text-black'> Contact Us </h1>
            <p className='py-2 text-3xl font-semibold text-black'>Get In Touch With Us</p>
            <div class="flex-grow max-w-24 border-2 border-blue-800"></div>
          </div>
          <div><img src={force} alt="hero"/></div>
          
          <div className='p-4'>
            <p className='py-2 text-lg text-black'>Lorem ipsum dolor sit amet consectetur. </p>
            <button className='w-full max-w-48 text-base rounded-lg ... px-8 text-white py-3 bg-[#0E387A]'>Contact Us</button>
          </div>
      </section>  
    );
  };
  
  export default ContactCard;
  