import "./Hero.css";
import backgroundImage from "../assets/images/landing_image.webp"; // Import the image

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
      }}
    >
      <div className="overlay">
        <div className="content">
          <h1>Welcome to</h1>
          <h2>India Kitchen</h2>
          <div className="buttons">
            <button className="explore-btn">Explore Menu</button>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
