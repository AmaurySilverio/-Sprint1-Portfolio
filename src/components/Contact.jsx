import Button from "./Button";
import "../componentStyling/Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <h2>Contact</h2>
      <p>
        I would love to hear from you and discuss any potential opportunities or
        collaborations. I'm especially open to food recs in the Philadelphia
        area :)
      </p>
      <Button buttonText="Contact" buttonHref="mailto:amaurycodes@gmail.com" />
    </div>
  );
};

export default Contact;
