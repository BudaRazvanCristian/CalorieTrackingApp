import "../styling/contact.scss";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="container-title">
          <h2>Contact our team</h2>
          <p>
            We'd love to hear from you! Whether you have questions about our
            app, feedback to improve your experience, or just want to say hello,
            we're here to help. Reach out to us through any of the channels
            below, and we'll get back to you as soon as possible.
          </p>
        </div>
        <form>
          <div className="name">
            <label htmlFor="first-name">
              First Name:
              <input type="text" id="first-name" placeholder="first name" />
            </label>
            <div className="second-name">
              <label htmlFor="second-name">
                Second Name:
                <input type="text" id="second-name" placeholder="second name" />
              </label>
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">
              Email:
              <input type="email" id="email" placeholder="your@email.com" />
            </label>
          </div>
          <div className="phone">
            <label htmlFor="phone">
              Phone Number:
              <div className="phone-input">
                <select id="country-code" name="country-code" required>
                  <option value="+40">+40 (Romania)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+49">+49 (Germany)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+1">+1 (USA/Canada)</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </label>
          </div>
          <div className="message">
            <label>
              Message
              <input type="text" placeholder="Leave us a message..."></input>
            </label>
          </div>
          <button className="form-button">Send Message</button>
        </form>
      </div>
    </>
  );
}
