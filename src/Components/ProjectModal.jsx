import Modal from "react-modal";
import "../styles/ProjectModal.css"
import { FaTimes, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import imgHTML from '../assets/skills/html.webp';
import imgCSS from '../assets/skills/css.webp';
import imgSASS from '../assets/skills/sass.webp';
import imgJAVASCRIPT from '../assets/skills/javascript.webp';
import imgREACT from '../assets/skills/react.webp';
import imgREDUX from '../assets/skills/redux.webp';
import imgGIT from '../assets/skills/git.webp';
import imgVISUALSTUDIO from '../assets/skills/visual-studio.webp';

const ProjectModal = ({ isOpen, onRequestClose, project }) => {

  const techToImg = (technologie) => {
    if(technologie === "html"){
      return imgHTML
    } else if (technologie === "css"){
      return imgCSS
    } else if (technologie === "sass"){
      return imgSASS
    } else if (technologie === "javascript"){
      return imgJAVASCRIPT
    } else if (technologie === "react"){
      return imgREACT
    } else if (technologie === "redux"){
      return imgREDUX
    } else if (technologie === "git"){
      return imgGIT
    } else {
      return imgVISUALSTUDIO
    }
  }



  return (
    <div>
      <Modal
        className="modale-container "
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            display: "flex",
            flexDirection: "column", 
            alignItems: "center", 
          },
        }}
      >
        <button onClick={onRequestClose} className="text-amber-500 text-3xl self-end"><FaTimes/></button>
        <img className="w-4/5 rounded-lg" src={project.images[1]} alt={"picture of the website "+project.titre} />
        <div className="text-white w-4/5 ">
          <h3 className="mt-7 text-xl font-bold inline-block mr-3">{project.title}</h3>
          <a href={project.github} target="_blank" rel="noopener noreferrer" title="see the code" className=" inline-block mr-3 text-amber-500">
            <FaExternalLinkAlt/>
          </a>
          <a href={project.website} target="_blank" rel="noopener noreferrer" title="see the website" className=" inline-block  mr-3 text-amber-500">
            <FaEye/>
          </a>
          <p className= "font-semibold mt-3 mb-8 ">{project.description}</p>
          <div className="grid grid-cols-10">
            {project.technologies.map((technologie, index) =>(
              <img width={40} height={40} className="mb-10" key={index} src={techToImg(technologie)} alt={`Logo of the website ${technologie}`} />
            ))}
          </div>
        </div>
        
      </Modal>
    </div>
  );
};

export default ProjectModal;