import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return;
    }

    setSuccess(
      "Your message has been received. We will get back to you shortly."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span>GET IN TOUCH</span>

        <h1>We'd Love to Hear From You</h1>

        <p>
          Have a question about a laptop, repair, upgrade,
          or any of our services? Reach out to BMArvel Laptop Hub.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">

          <h2>Contact Information</h2>

          <p>
            We're here to help you find the right technology
            solution for your needs.
          </p>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>09053432377</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💬</div>
            <div>
              <h3>WhatsApp</h3>
              <p>08143767338</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>support@bmarvel.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Nigeria</p>
            </div>
          </div>

        </div>

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="5"
              />
            </div>

            {success && (
              <p className="contact-success">
                {success}
              </p>
            )}

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;