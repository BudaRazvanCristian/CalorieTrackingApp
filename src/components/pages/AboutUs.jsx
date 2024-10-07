import "../styling/AboutUs.scss"; // Ensure the path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {" "}
      {/* Changed class name */}
      <header className="about-us-hero-section">
        {" "}
        {/* Changed class name */}
        <h1>About Us</h1>
        <p>Your Journey to Personal Wellness Starts Here</p>
      </header>
      <section className="about-us-content">
        {" "}
        {/* Changed class name */}
        <div className="about-us-text-content">
          {" "}
          {/* Changed class name */}
          <h2>What is Mivo?</h2>
          <p>
            Mivo is more than just a calorie tracking app; it&apos;s designed to
            help you take control of your personal health and wellness goals.
            The name “Mivo” combines two key concepts:
          </p>
          <ul>
            <li>
              <b>Mi:</b> Represents &quot;mine,&quot; symbolizing ownership of
              your personal health journey.
            </li>
            <li>
              <b>Vo:</b> Stands for &quot;vitality&quot; and
              &quot;willpower,&quot; emphasizing the energy and determination
              needed to achieve your goals.
            </li>
          </ul>
        </div>
        <div className="about-us-image-content">
          {" "}
          {/* Changed class name */}
          <img src="./mivo-logo.png" alt="Mivo App Showcase" />
        </div>
      </section>
      <section className="about-us-team-section">
        {" "}
        {/* Changed class name */}
        <h2>Meet Our Team</h2>
        <p>
          At Mivo, our dedicated team of health enthusiasts and tech experts
          work together to create a seamless experience for users who want to
          take charge of their health.
        </p>
        <div className="about-us-team-images">
          {" "}
          {/* Changed class name */}
          <img src="./person-1.jpg" alt="Team Member 1" />
          <img src="./person-3.jpg" alt="Team Member 2" />
          <img src="./person-2.jpg" alt="Team Member 3" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
