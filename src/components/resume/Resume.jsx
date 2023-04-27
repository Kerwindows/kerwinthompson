import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Software Engineer`,
    jobType: `Cyversify Limited | Remote`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Cyversify Ltd",
    jobDescription: `Spareheaded the UX design and development of a PWA travel application for start-up company Checkin Cyversify in tandem with an NFC ready digital business card web app using PHP, Javascript and Ajax. During this time I was able to acquire my initial first-hand experience as a senior software developer. I was able to improve company standardization for quality assurance to the end user. Evaluate and prioritize development stages to meet deadlines for real time implementation. Developed stronger interpersonal, written, and oral communication.`,
  },

  {
    jobPosition: `Systems Adminstrator`,
    jobType: `Desktop Support`,
    jobDuration: `August 2019 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Caribbean Union College",
    jobDescription: `Bridged the gap between education and IT support. Connected with faculty and staff to create a strong relationship between departments for overall increased computer literacy and connectivity. Oversee the school’s web-based infrastructure and develop programs that benefit students, faculty, and staff. Promoted digital bookkeeping, registration, and scheduling for increased productivity and drastically reduced waste. Active change agent directing the college toward web-based solutions and e-learning strategies.`,
  },
  {
    jobPosition: `Independant Contractor`,
    jobType: `Web Developer`,
    jobDuration: `Nov 2019 - Present`,
    timeDuraton: `Seasonal`,
    companyName: "Kodelamp LLC",
    jobDescription: `As a WordPress developer and consultant, I spearheaded the development and management of WordPress websites for diverse clients. I developed a native WordPress plugin optimized for the Divi WordPress Page Builder, expertly configuring both back-end settings and front-end design for various themes. I provided valuable insights into security and optimization measures while working closely with the design team to create layouts supported by the plugin. Additionally, I resolved client issues via remote desktop support and created documentation and licensing features for easy installation and updates.`,
  },
];

const educatonContent = [
  {
    passingYear: "2016-2018",
    degreeTitle: "BSc in Information technology",
    instituteName: "University Hertfordshire",
  },
  {
    passingYear: "2022-2023",
    degreeTitle: "Software Engineering Certification",
    instituteName: "Practicum US by Yandex",
  },
  {
    passingYear: "2003-2005",
    degreeTitle: "Adv. Dip in Electronics Technology",
    instituteName: "The University of Trinidad and Tobago",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
