import Button from "./Button";

const ProjectCard = ({
  imgSrc,
  cardTitle,
  cardText,
  buttonText,
  buttonHref,
  buttonTarget,
}) => {
  return (
    <div className="project">
      <img src={imgSrc} />
      <h3>{cardTitle}</h3>
      <p>{cardText}</p>
      <Button
        buttonText={buttonText}
        buttonHref={buttonHref}
        buttonTarget={buttonTarget}
      />
    </div>
  );
};

export default ProjectCard;
