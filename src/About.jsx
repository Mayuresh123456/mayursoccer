import "./About.css";
import footballVideo from "./football.mp4";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="bg-video"
      >
        <source src={footballVideo} type="video/mp4" />
      </video>

      <div className="overlay">
        <h1>Built for Footballers</h1>
        <p>
          From training to match day, we deliver gear trusted by players.
        </p>
        <Link to="/products">
        <button>Explore Products</button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
