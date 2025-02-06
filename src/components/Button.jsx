import "../componentStyling/Button.css";
import "../componentStyling/Navbar.css";

const Button = ({ buttonText, onClick, buttonHref }) => {
  return (
    <>
      <a onClick={onClick} href={buttonHref}>
        {buttonText}
      </a>
    </>
  );
};

export default Button;
