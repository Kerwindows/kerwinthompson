import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. Full-Stack Engineer`,
    jobType: `Cyversify Limited | Remote`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Cyversify",
    jobDescription: `Spareheaded the UX design and development of a PWA travel application for start-up company Checkin Cyversify in tandem with an NFC ready digital business card web app using PHP, Javascript and Ajax. During this time I was able to acquire my initial first-hand experience as a senior software developer. I was able to improve company standardization for quality assurance to the end user. Evaluate and prioritize development stages to meet deadlines for real time implementation. Developed stronger interpersonal, written, and oral communication.`,
  },
  {
    jobPosition: `Front-End Developer`,
    jobType: `Web Developer | Remote`,
    jobDuration: `Sep 2016 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Kerjem Marketing Technologies",
    jobDescription: `Developed a native WordPress plugin for Elegant Themes Divi Theme that uses CSS to manipulates the HTML DOM for mobile devices, making it fully customizible to the front end designer. Created documentation and licenscing feature to enable installation and upadtes. Worked closely with design team in creating layouts supported by the plugin. Resolve client issues via remote desktop support.`,
  },
  {
    jobPosition: `Teacher / Systems Adminstrator`,
    jobType: `Desktop Support | Remote`,
    jobDuration: `August 2010 - 2020`,
    timeDuraton: `Part Time`,
    compnayName: "Caribbean Union College",
    jobDescription: `Bridged the gap between education and IT support. Connected with faculty and staff to create a strong relationship between departments for overall increased computer literacy and connectivity. Oversee the school’s web-based infrastructure and develop programs that benefit students, faculty, and staff. Promoted digital bookkeeping, registration, and scheduling for increased productivity and drastically reduced waste. Active change agent directing the college toward web-based solutions and e-learning strategies.`,
  },
];

const educatonContent = [
  {
    passingYear: "2022-2023",
    degreeTitle: "Software Engineering Certification",
    instituteName: "Practicum US by Yandex",
  },
  {
    passingYear: "2016-2018",
    degreeTitle: "BSc in Information technology",
    instituteName: "University Hertfordshire",
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
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
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
