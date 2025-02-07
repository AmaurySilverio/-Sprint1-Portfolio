import "../componentStyling/Button.css";
import "../componentStyling/Navbar.css";

const Button = ({ buttonText, onClick, buttonHref, buttonTarget }) => {
  // const buttonTarget = ["_self"];

  return (
    <>
      <a onClick={onClick} href={buttonHref} target={buttonTarget}>
        {buttonText}
      </a>
    </>
  );
};

export default Button;
