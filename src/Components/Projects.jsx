import { useState } from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import ProjectModale from './ProjectModale';
import ProjectsData from '../data/projectsDatas';

const Projects = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setSelectedProject(null);
        setIsOpen(false);
    };

    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])


    return (

        
       <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-amber-500">Projects</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            {/* <img data-aos="fade-up" height={300} width={400} className="flex items-center justify-center rounded-3xl p-1 cursor-pointer" src={img1} alt="" onClick={} />
            <img data-aos="fade-down" height={300} width={400} className="flex items-center justify-center rounded-3xl p-1 cursor-pointer" src={img2} alt="" onClick={}/>
            <img data-aos="fade-up" height={300} width={400} className="flex items-center justify-center rounded-3xl p-1 cursor-pointer" src={img3} alt="" onClick={}/>
            <img data-aos="fade-down" height={300} width={400} className="flex items-center justify-center rounded-3xl p-1 cursor-pointer" src={img4} alt="" onClick={}/>          */}
            {
                ProjectsData && ProjectsData.map((project, id) => (
                    <div key={id} data-aos={id % 2 == 0 ? 'fade-down' : 'fade-up'} className="flex items-center justify-center  p-1 cursor-pointer" >
                        <img className='rounded-3xl' height={300} width={400} src={project.images[0]} alt="" onClick={() => openModal(project)} />
                    </div>
                ))
            }
        </div>

        {selectedProject && (
        <ProjectModale
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          project={selectedProject}
          appElement="#root"
        />
        )}


       </div>
       
    );
};

export default Projects;