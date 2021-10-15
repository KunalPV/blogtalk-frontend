import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [isForm, setIsForm] = useState(true);

  const submitHandler = () => {
    setIsForm(false);
  };

  return (
    <div className="contact">
      {isForm && (
        <div className="form-wrap">
          <h1>Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="number"
                name="contact"
                id="contact"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Enter a message"
              />
            </div>
            <button type="submit" className="btn" onClick={submitHandler}>
              Sign Up
            </button>
          </form>
        </div>
      )}
      {!isForm && (
        <div className="success-msg">
          <h1>Thank you for getting in touch!</h1>
          <p>
            We have received your message and would like to thank you for
            writing to us.
          </p>
          <p>We will reply by email as soon as possible.</p>
          <p>
            Talk to you soon, Team <span>BlogTalk</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
