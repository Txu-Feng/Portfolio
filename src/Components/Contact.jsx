import Aos from "aos";
import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    useEffect(()=> {
        Aos.init({duration: 1000});
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        const message = document.getElementsByName("message")[0];
        const name = document.getElementsByName("from_name")[0];
        const email = document.getElementsByName("from_email")[0];
        if(message.value && name.value && email.value){
            emailjs.sendForm('service_2npd91o', 'template_b9udial', form.current, 'Zc151-NnJemogJInn')
            .then((result) => {
                console.log(result.text);
                alert("email envoyé");
            }, (error) => {
                console.log(error.text);
            });
            message.value="";
            name.value="";
            email.value="";
        } else {
            alert("veuillez remplir tous les champs")
        }
      };
      
    return (
       <div name="contactForm" id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center bg-neutral-800">
        <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-amber-500">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 lg:w-1/2">
            <div className="lg:flex gap-9">
                <input className="w-full lg:my-3 my-4 rounded-lg bg-neutral-800 p-4 border-2 border-amber-600 text-xl text-neutral-500" placeholder="Enter Your Name" type="text" name="from_name" />
                <input className="w-full lg:my-3 my-4 rounded-lg bg-neutral-800 p-4 border-2 border-amber-600 text-xl text-neutral-500" placeholder="Enter Your Email" type="email" name="from_email" />
            </div>
            <textarea className="w-full my-3 rounded-lg bg-neutral-800 p-4 border-2 border-amber-600 text-xl text-neutral-500" placeholder="Write Your Message..." name="message" id="" cols="20" rows="10"></textarea>
            <button className="neno-button shadow-xl text-white border-2 border-amber-600 bg-amber-600 hover:text-amber-500 hover:bg-neutral-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden text-xl text-bold" type="submit" name="message">Submit</button>
        </form>
        
       </div>
    );
};

export default Contact;