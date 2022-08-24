import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold mb-4 text-center">Contact Us</h1>
          <div className="row">
            <div className="col-10 col-md-3 mx-auto">
              <ContactInfo />
            </div>
            <div className="col-10 col-md-9 mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
