import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Software Engineer`,
    jobType: `Cyversify Limited | Remote`,
    jobDuration: `2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Cyversify",
    jobDescription: `Spearheaded the UI and UX design and development of a Progressive Web App (PWA) travel application for the startup company, Checkin Cyversify. Following the project's completion, I continued to contribute to two other major applications: a social networking web app integrated with an NFC-enabled digital business card using VCard technology, and a School Information Management Application. During this time, I employed technologies such as PHP, JavaScript, Ajax, and SQL.

    This experience allowed me to gain invaluable hands-on expertise as a senior software developer and pursue a software development certification. This certification enabled me to enhance the company's standardization for quality assurance, ensuring an optimal experience for end users. Furthermore, I honed my skills in evaluating and prioritizing development stages to meet real-time implementation deadlines. As a result, my interpersonal, written, and oral communication skills have significantly improved.`,
  },

  {
    jobPosition: `Systems Adminstrator`,
    jobType: `Tech Support | Remote`,
    jobDuration: `Sep 2019 - Current`,
    timeDuraton: `Part Time`,
    compnayName: "Caribbean Union College",
    jobDescription: `In my current role, I am responsible for a wide range of web-related activities, including technical and desktop support, as well as managing our social media pages. My primary focus is to propose innovative solutions that leverage software for development, enabling us to optimize our eLearning platform and other applications. I closely monitor the backend of our eLearning platform to ensure that student records and courses remain accurate and up-to-date. Additionally, I am involved in the development, refactoring, and deployment of our school's database application, which allows us to maintain a streamlined and efficient system for managing vital information.`,
  },
  {
    jobPosition: `WordPress Developer`,
    jobType: `Freelance | Remote`,
    jobDuration: `Sep 2019 - 2020`,
    timeDuraton: `Part Time`,
    compnayName: "Kerjem Marketing Technologies",
    jobDescription: `As an independant contactor, I successfully developed a native WordPress plugin specifically tailored for the Elegant Themes Divi Theme. This plugin leverages CSS to manipulate the HTML DOM on mobile devices, offering full customization to front-end designers. Along the way, I acquired valuable skills in plugin development, CSS manipulation, and HTML DOM adjustments. Furthermore, I created comprehensive documentation and implemented a licensing feature to facilitate seamless plugin installation and updates. Collaborating closely with the design team, I ensured the plugin supported various layouts, thereby enhancing its overall versatility. My expertise in providing remote desktop support enabled me to efficiently resolve client issues and maintain a high level of customer satisfaction.`,
  },
  {
    jobPosition: `IT Adminstrator`,
    jobType: `Desktop Support | On-site`,
    jobDuration: `August 2016 - 2019`,
    timeDuraton: `Full Time`,
    compnayName: "Caribbean Union College",
    jobDescription: `Effectively bridged the gap between education and IT support by fostering strong relationships between faculty, staff, and the IT department. This collaboration led to improved computer literacy and connectivity across all departments. Along the way, I acquired valuable skills in communication, cross-functional teamwork, and digital transformation.

    As part of my responsibilities, I oversaw the school's web-based infrastructure and developed programs that benefited students, faculty, and staff alike. I successfully implemented digital bookkeeping, registration, and scheduling systems, which not only increased productivity but also significantly reduced waste.
    
    As an active change agent, I guided the college towards embracing web-based solutions and e-learning strategies, keeping the institution at the forefront of educational technology and ensuring a modern, efficient learning environment for all..`,
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
