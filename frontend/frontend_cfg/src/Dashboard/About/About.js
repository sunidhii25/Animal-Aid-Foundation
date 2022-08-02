import React from "react";

const About = () => {
  return (
    <>
      <div
        className="about_section layout_padding"
        id="about"
        style={{ backgroundColor: "#222629", marginBottom: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2
                className="about_taital"
                style={{ color: "#61892F", textAlign: "left" }}
              >
                <span style={{color: '#fff', textTransform:'capitalize',fontWeight: '600'}}>about</span> Animal Aid Foundation
              </h2>
              <p className="about_text" style={{fontSize: 24, lineHeight: 2, fontWeight: 400}}>
              Being humans and having the most of anything any other creature could ever desire of I hereby pledge to take the responsibility,
of making sure that every creature sharing this planet with us, won’t starve or suffer in any condition at least in my presence I pledge to live consciously and thereby respect respect the presence of all the creatures, I understand that we all Co-exist and share this planet, and are NOT THE OWNERS here.
              </p>
              <div
                className="readmore_bt"
                style={{
                  border: "2px solid #86C232",
                }}
              >
                <a
                  href="/signup"
                  target="_blank"
                  style={{ color: "#86C232", border: "none" }}
                  className="readmoreA"
                >
                  Join us
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="about_img">
                <img src="images/about-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;