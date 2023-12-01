import {FaGithub, FaPhone} from "react-icons/fa";   
import { MdMail } from "react-icons/md";

const Footer = () => {
    return (
       <footer className="bg-neutral-700 text-white lg:px-48 px-4 py-4">
        <div className="container mx-auto flex flex-col items-center justify-center">
           <div className="flex flex-col items-center justify-center">
                <h2 className="text-[22px] font-semibold text-amber-600 py-2 uppercase">Available Now</h2>
                <div className="flex space-x-8 justify-center">
                    <a className="text-white hover:text-amber-600 text-[30px] transition-all duration-150 ease-in-out" href="https://github.com/Txu-Feng">
                        <FaGithub/>
                    </a>
                    <a className="text-white hover:text-amber-600 text-[30px] transition-all duration-150 ease-in-out" href="tel:0646497925">
                        <FaPhone/>
                    </a>
                    <a className="text-white hover:text-amber-600 text-[30px] transition-all duration-150 ease-in-out" href="mailto:txu.feng.ly@gmail.com">
                        <MdMail />
                    </a>
                </div>
                <p className="mt-6">Copyright © Txu-Feng LY</p>
           </div>
        </div>
       </footer>

    );
};

export default Footer;