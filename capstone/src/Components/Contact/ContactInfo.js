import "./ContactInfo.scss";

function ContactInfo() {
  return (
    <div className="contact-info">
      <h4 className="contact-info__title mb-2">HEADQUARTERS</h4>
      <p className="contact-info__text mb-4">
        Street 2, 180 Amphitheatre Parkway, New York
      </p>
      <h4 className="contact-info__title mb-2">PHONE</h4>
      <p className="contact-info__text mb-4">180045128556,18001282374</p>
      <h4 className="contact-info__title mb-2">support</h4>
      <p className="contact-info__text mb-4">
        support@your-domain.com
        <br />
        help@your-domain.com
        <br />
      </p>
    </div>
  );
}

export default ContactInfo;
