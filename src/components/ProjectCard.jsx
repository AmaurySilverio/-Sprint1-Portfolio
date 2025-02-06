import Button from "./Button";

const ProjectCard = ({
  imgSrc,
  cardTitle,
  cardText,
  buttonText,
  buttonHref,
}) => {
  return (
    <div className="project">
      <img src={imgSrc} />
      <h3>{cardTitle}</h3>
      <p>{cardText}</p>
      <Button buttonText={buttonText} buttonHref={buttonHref} />
    </div>
  );
};

export default ProjectCard;
