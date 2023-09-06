import React from "react";
import "./ContactUs.css";

function ContactUs() {
    return (
      <div className="contact-container">
        <div className="text-box">
          <h2>We want to hear from you!</h2>
          <p>
            Thank you for visiting FaceCake! We value your feedback,
            suggestions, and inquiries. Please feel free to contact us using the
            information below.
          </p>
          <p>Email: contactus@facecake.com </p>
          <p>Phone: (505) 503-4455</p>
        </div>
        <div className="image-container">
          <img
            src="https://img.freepik.com/free-vector/isometric-contact-us-lettering-vector-italic-font-typography_53876-177124.jpg?w=1380&t=st=1694032109~exp=1694032709~hmac=ddd5eb75235c812970ba1c4c278d6cca1eb802a496a345f416b1087ccf2b0521"
            alt="Contact"
          />
        </div>
      </div>
    );
}
export default ContactUs;