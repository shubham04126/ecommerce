import "./ContactForm.scss";

function ContactForm() {
  return (
    <div className="contact-form">
      <h4 className="contact-form__title">Let's Connect</h4>

      <form onSubmit={(e) => e.preventDefault()} className="contact-form__form">
        <div className="contact-form__input d-flex justify-content-center align-items-center">
          <input
            className="contact-form__input-field"
            type="text"
            placeholder="your name"
          />
          <input
            className="contact-form__input-field"
            type="email"
            placeholder="your email"
          />
        </div>
        <div className="contact-form__message mt-4">
          <textarea
            rows="10"
            className="contact-form__message"
            placeholder="your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
