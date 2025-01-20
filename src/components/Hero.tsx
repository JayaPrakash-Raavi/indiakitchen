import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to</h1>
      <h2>India Kitchen</h2>
      <div className="buttons">
        
        <button className="explore-btn"><Link className="explore-btn" to="/menu">Menu</Link></button>
        <button className="contact-btn"><Link className="explore-btn" to="/contact">Contact Us</Link></button>
      </div>
    </section>
  );
};

export default Hero;
