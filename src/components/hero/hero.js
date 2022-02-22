import React from "react";

const hero = () => {
  return (
    <>
      <section id="welcome-section" className="hero">
       <div className="row">
          <div className="hero-descriptions">
            <h1>
              Jhon Araujo
            </h1>
            <h3>
              Software developer with an extensive background in IT for more than 10 years.
            </h3>
            <br />
            <h4>
              I will make a positive impact on yours projects and I will always put the commercial needs of your business at the forefront of everything I do.
            </h4>
          </div>
          <div className="hero-social">
            <ul className="intro-social">
              <li>
                <a href="https://linkedin.com/in/jhonmeraraujo" class="fa fa-linkedin"></a>
              </li>
              <li>
                <a href="https://github.com/jhonmer.araujo" class="fa fa-github" id="profile-link"></a> 
              </li>
              <li>
                <a href="https://twitter.com/jh0nm3r" class="fa fa-twitter"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="hero-arrow">
            <a href="#skills" class="fa fa-arrow-down"></a> 
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
