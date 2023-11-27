
import img from '../assets/txu.webp';

const About = () => {
    return (

        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center bg-neutral-800">
            <img data-aos="fade-down" src={img} width={290} height={290} className='rounded-xl p-1' alt="" />
            <div className=" h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-amber-500 uppercase">About me</h1>
                <p data-aos="fade-left">Hello, my name is Txu-Feng LY. I know my first name can be complicated to pronounce. But, generally, they call me "Tchou". Having already a little experience in computer development, I decided to consolidate my knowledge by doing the training of web integrator at OpenClassroom. I learned to develop responsive websites, improve user experience and SEO. I was also able to perform tests in order to debug an application. Thanks to this training, I have a specialty in front-end development, but my curiosity does not stop there. During my experience, I was able to work on back-end development, database management and software development. I invite you to contact me if you want to collaborate or simply discuss projects.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-xl hover:shadow-amber-600/50  text-white border-2 hover:bg-amber-600 border-amber-600 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;