import "../componentStyling/Projects.css";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

// const ProjectCard = ({
//   imgSrc,
//   cardTitle,
//   cardText,
//   buttonText,
//   buttonHref,
// }) => {
//   return (
//     <div className="project">
//       <img src={imgSrc} />
//       <h3>{cardTitle}</h3>
//       <p>{cardText}</p>
//       <Button buttonText={buttonText} buttonHref={buttonHref} />
//     </div>
//   );
// };

const Projects = () => {
  return (
    <div className="projects-wrapper" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <ProjectCard
          imgSrc="/images/connections.gif"
          cardTitle="Connections Game"
          cardText="NYT Connections clone where you can create your own custom game!"
          buttonText="View Project"
          buttonHref="https://freestyleconnections.onrender.com/"
        />
        <ProjectCard
          imgSrc="/images/naruto-card-game.gif"
          cardTitle="Matching Game"
          cardText="Naruto Themed Matching card game created using Javascript, CSS &
          HMTL."
          buttonText="View Project"
          buttonHref="https://narutocardgame.netlify.app/"
        />
        <ProjectCard
          imgSrc="/images/ASL-Lingo.gif"
          cardTitle="ASL-Lingo"
          cardText="Full-Stack Application that teaches users basic American Sign
          Language."
          buttonText="View Project"
          buttonHref="https://freestyleconnections.onrender.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
