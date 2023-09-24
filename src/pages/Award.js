import React from "react";
import Header from "../components/Header";
import utils from "./utils";

const Award = () => {
  let titlesArray = utils().awardTitles();
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>
            <ul className="fa-ul mb-0">
            {
              titlesArray.map((title, index) => {
                return (
                  <li key={index}>
                    <span className="fa-li">
                      <i className="fas fa-trophy text-warning"></i>
                    </span>
                    {title.title}
                  </li>
                );
              })
            }
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
