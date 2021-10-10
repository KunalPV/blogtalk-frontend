import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div class="form-wrap">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label for="contact">Contact Number</label>
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="Enter your contact number"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              type="message"
              name="message"
              id="message"
              placeholder="Enter a message"
            />
          </div>
          <button type="submit" class="btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
