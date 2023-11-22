import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppIcon from "../images/App Dev Icon.svg";
import BlockchainIcon from "../images/Blockchain icon.svg";
import UxIcon from "../images/UX Icon.svg";
import DevIcon from "../images/Web Dev Icon.svg";
import Rectangle from "../images/Rectangle 1.svg";
import ImageGrid from "../components/ImageGrid";
import CaseStudiesSlider from "../components/CaseStudiesSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="homepage-hero">
          <div className="hero-card">
            <h1>Live with Confidence</h1>
            <p>
              José Mourinho brings confidence to pan-African Sanlam campaign.
            </p>
            <button className="hero-cta-button">View project</button>
          </div>
        </div>
      </section>
      <section>
        <div className="what-we-do">
          <div>
            <p>
              <img src={Rectangle} alt="" /> What we do
            </p>
          </div>
          <h2>
            We offer a complete range of bespoke design and development services
            to help you turn your ideas into digital masterpieces
          </h2>
          <div className="what-we-do-cards">
            <div>
              <img src={DevIcon} alt="" />
              <h3>Web development</h3>
              <p>
                We use cutting-edge web development technologies to help our
                clients fulfill their business goals through functional,
                reliable solutions.
              </p>
            </div>
            <div>
              <img src={UxIcon} alt="" />
              <h3>User experience & design</h3>
              <p>
                Our complete web design services will bring your ideas to life
                and provide you with a sleek, high-performing product that
                elevates your business.
              </p>
            </div>
            <div>
              <img src={AppIcon} alt="" />
              <h3>Mobile app development</h3>
              <p>
                Our extensive mobile development experience allows us to create
                custom native and cross-platform iOS and Android mobile
                solutions for our clients.
              </p>
            </div>
            <div>
              <img src={BlockchainIcon} alt="" />
              <h3>Blockchain solutions</h3>
              <p>
                We conduct market research to determine the optimal
                blockchain-based solutions to help you grow your company and
                achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className="case-studies">
          <p>
            <img src={Rectangle} alt="" /> Case studies
          </p>
          <CaseStudiesSlider />
          
        </div>
      </section>
      <section>
        <div className="testimonial">
          <div>
            <p>
              <img src={Rectangle} alt="" /> You'll be in good company
            </p>
          </div>
          <h4>Trusted by leading brands</h4>
          <div><ImageGrid /></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
