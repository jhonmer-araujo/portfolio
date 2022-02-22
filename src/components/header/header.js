import React from "react";

const header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="header-nav" id="navbar">
          <ul>
            <li>
              <a href="index.html" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="btn-resume">
          <div className="btn-resume-border">
            <div className="btn-resume-link">
              <a href="#0" className="btn-resume-text">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
