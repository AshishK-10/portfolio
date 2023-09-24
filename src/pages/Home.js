import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Ashish
              <span className="text-primary"> Kumar</span>
            </h1>
            <div className="subheading mb-5">
              New Delhi, India · +91 7982314131 ·
              <a href="mailto:kumarashish2615@gmail.com"> kumarashish2615@gmail.com</a>
            </div>
            <p className="lead mb-5">
              Results-driven software developer skilled in MERN (MongoDB, ExpressJs, ReactJs, NodeJs) stack and Ruby on Rails. Experienced in full-stack development and agile methodologies. Continuously learning and adapting to new technologies. Strong problem-solving and communication skills. Seeking opportunities to drive innovation and create impactful software solutions. Let's connect and collaborate.
            </p>

            <div className="social-icons" style={{display: "flex", justifyContent: "center"}}>
              <a className="social-icon" href="https://www.linkedin.com/in/ashish-kumar-24b482204">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="https://github.com/AshishK-10">
                <i className="fab fa-github"></i>
              </a>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <a className="social-icon" href="assets/resume/ashish_resume.pdf">
                  <i className="fa fa-download"></i>
                </a>
                <span style={{fontFamily: "cursive"}}>My Resume</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Home;
