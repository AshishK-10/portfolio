import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Kalinga Institute of Industrial Technology (KIIT)</h3>
                <div className="subheading mb-3">Bachelor of Technology (Btech)</div>
                <div>Information Technology</div>
                <p>GPA: 8.90</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2019 - July 2023</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">D.A.V Public School, Jasola Vihar</h3>
                <div className="subheading mb-3">Non Medical(P.C.M), HighSchool</div>
                <p>Percentage: 87.5%</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">April 2017 - April 2018</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Education;
