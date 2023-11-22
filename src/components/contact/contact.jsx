import message from "../../images/message_light.svg";
import phone from "../../images/phone_light.svg";
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p className="above-section">
        <span className="dash">-</span>contact me
      </p>
      <div className="contact-container">
        <ContactForm />
        <div className="contact-details">
          <div className="contact-email">
            <img id="img-email" src={message} alt="message-icon" />
            <div className="contact-info">
              <label>E-Mail</label>
              <p className="email" id="email">
                quadraccia.rob@gmail.com
              </p>
            </div>
          </div>
          <div className="contact-number">
            <img id="img-phone" src={phone} alt="phone-icon" />
            <div className="contact-info">
              <label>Phone</label>
              <p className="phone" id="phone">
                +44 (0) 7869224777
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;