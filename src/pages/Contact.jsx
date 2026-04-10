import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for bulk orders and business inquiries.</p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-info">
          <h2>Our Office</h2>
          <div className="info-block">
            <h4>Address</h4>
            <p>123 Grain Market, Trading Hub<br/>Business District, 400001</p>
          </div>
          <div className="info-block">
            <h4>Phone & Email</h4>
            <p>+91 98765 43210</p>
            <p>wholesale@superfood.com</p>
          </div>
          <div className="info-block">
            <h4>Business Hours</h4>
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send an Enquiry</h2>
          {submitted && <div className="success-message">Thank you! Your enquiry has been sent.</div>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
