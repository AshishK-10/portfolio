import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        {/* <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Clarence
              <span className="text-primary">Taylor</span>
            </h1>
            <div className="subheading mb-5">
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
              <a href="mailto:name@email.com">name@email.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section> */}
        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Software Development Intern</h3>
                <div className="subheading mb-3">Devathon, Crypsis Technologies</div>
                <ul>
                  <li>
                    Successfully worked on projects such as TalentMetric, Pilcrow Solutions (UHC Healthcare), and Autochat.io 
                    (Shopify), utilizing Ruby on Rails and the MERN stack.
                  </li>
                  <li>
                    By optimizing these applications, I significantly increased the customer count.
                    Leveraging my expertise, I enhanced performance, scalability, and user experience, resulting in improved customer 
                    satisfaction and business growth.
                  </li>
                  <li>
                    Worked on version control systems such as Git, GitHub, and GitLab. These powerful tools helped in effective 
                    collaboration, efficient code management, and seamless project tracking.
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2022 - July 2023</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Intern</h3>
                <div className="subheading mb-3">KIIT TNP (KAREER SCHOOL)</div>
                <ul>
                  <li>
                    During my internship, I gained hands-on experience working with JavaScript, ReactJS, CSS, and HTML.
                  </li>
                  <li>
                    I developed a solid foundation in web development, mastering the fundamentals of front-end technologies.
                  </li>
                  <li>
                    This experience enabled me to create interactive and visually appealing user interfaces, while also enhancing my 
                    problem-solving and collaborative skills in a professional environment.
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">January 2022 - April 2022</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Experience;
