import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvqdngp");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <form className="contact-form" action="https://formspree.io/f/xjvqdngp" method="POST" onSubmit={handleSubmit}>
      <input
        className="form-input"
        placeholder="Name"
        id="input-name"
        type="name"
        name="name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        className="form-input"
        placeholder="Email"
        id="input-email"
        type="email"
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="form-input"
        placeholder="Message"
        id="message"
        type="text"
        name="message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="btn-message" type="submit" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
