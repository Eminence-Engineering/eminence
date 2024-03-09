import heroImg from '../assets/images/Who.png'
import { AiOutlineSearch } from 'react-icons/ai'

// components
import Header from "./HeaderWhite";

const HeroSection = () => {
  return (
    <section className='w-full bg-white py-24 p-4'>
        <div className='md:max-w-[1200px] m-auto grid md:grid-cols-2 max-w-[400px]'>
            <div className='flex flex-col justify-start gap-4'>
            <div class="relative flex py-5 items-center">
                <div class="flex-grow max-w-24 border-2 border-blue-800"></div>
                <span class="flex-shrink mx-4 text-xl text-black">Who we Are</span>
                </div>
                <h1 className='py-2 text-5xl font-semibold text-black'>
                We're Professional IT Solutions Agency
                </h1>
                <p className='py-2 pr-40 text-lg text-black'>Lorem ipsum dolor sit amet consectetur. Pretium dolor amet fames non morbi luctus id aliquet.</p>
            
               <button className='w-full max-w-48 text-base rounded-lg ... pl-8 text-white py-3 bg-[#0E387A]'>Sign up for free</button>
               
            </div>
            <img src={heroImg} alt="hero" className='md:order-last order-first'/>
        </div>
    </section>  
  );
};

export default HeroSection;
