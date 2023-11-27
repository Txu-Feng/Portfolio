import img from '../assets/pexels-andrea-davis.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import imgFR from '../assets/icons8-la-france-48.webp';
import imgEN from '../assets/icons8-anglais-48.webp';
const Banner = () => {
   useEffect(() => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
   },[])
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center max-w-7xl">
            <div className=" h-full lg:py-24 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-amber-500">My Portfolio</span></h1>
                <p data-aos="fade-right">I realized this site as part of my training of web integrator at OpenClassroom. You will see the different projects I made during my journey as well as the technology I used.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div data-aos="fade-up" className="flex space-x-5">
                            <img src={imgFR} alt="" className='cursor-pointer'/>
                            <img src={imgEN} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={500} height={500} className='rounded-full  p-1' alt="" />
        </div>
    );
};

export default Banner;