import Modal from "react-modal";

const ProjectModale = ({ isOpen, onRequestClose }) => {
  return (
    <div>
      <Modal
        className="modale-container"
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
        <button onClick={onRequestClose}>close</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae placeat totam modi enim rerum unde! Tempora, distinctio necessitatibus explicabo reprehenderit molestias, voluptatem quam facilis libero quod, eos blanditiis natus perferendis?</p>
      </Modal>
    </div>
  );
};

export default ProjectModale;