import React from "react";

function About() {
  return (
    <div className="container my-5 gap-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="src/assets/AboutUs.png"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6 ">
          <h2 className="mb-3">About Us</h2>
          <p>
            Welcome to TennisWiki, your ultimate hub for everything tennis!
            Whether you’re a passionate fan, an aspiring player, or just curious
            about the sport, we bring you accurate, insightful, and
            easy-to-understand information all in one place. At TennisWiki, we
            believe tennis is more than just a game—it’s a global community that
            inspires discipline, passion, and sportsmanship. Our mission is to
            make tennis knowledge accessible to everyone, from beginners
            learning the basics to experts analyzing professional matches.
          </p>
          <button className="btn btn-primary mt-3">Learn More</button>
        </div>
      </div>

      <div className="row mt-5 g-4"> {/* your card columns add gap using g-4 */}
        <div className="col-md-4 col-sm-12 text-center">
          <div className="card">
            <img
              src="src/assets/Vision.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2>Vision</h2>
              <p>
                To be the world’s most trusted and loved tennis knowledge
                platform.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 text-center">
          <div className="card">
            <img
              src="src/assets/Mission.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2>Mission</h2>
              <p>
                To make tennis knowledge accessible, engaging, and inspiring for
                fans, learners, and players worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="card">
            <img
              src="src/assets/WhatWeOffer.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2 className="text-center">What We Offer</h2>
              <ul className="list-unstyled">
                <li>
                  📰 <strong>Player Profiles</strong> – Legends & rising stars
                </li>
                <li>
                  🎾 <strong>Rules & Guides</strong> – From basics to strategies
                </li>
                <li>
                  📊 <strong>Stats & Records</strong> – Rankings & insights
                </li>
                <li>
                  🌍 <strong>Tennis Community</strong> – Connect & share
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
