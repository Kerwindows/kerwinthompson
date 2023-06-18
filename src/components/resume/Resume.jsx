import React from 'react';
import Skills from '../skills/Skills';

const resumeContent = [
  {
    jobPosition: `Software Engineer`,
    jobType: `Cyversify Limited | Remote`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: 'Cyversify Ltd',
    jobDescription: `Spareheaded the UX design and development of a PWA travel application for start-up company Checkin Cyversify in tandem with an NFC ready digital business card web app using PHP, Javascript and Ajax. During this time I was able to acquire my initial first-hand experience as a senior software developer. I was able to improve company standardization for quality assurance to the end user. Evaluate and prioritize development stages to meet deadlines for real time implementation. Developed stronger interpersonal, written, and oral communication.`,
  },

  {
    jobPosition: `Systems Adminstrator`,
    jobType: `Desktop Support`,
    jobDuration: `August 2019 - Present`,
    timeDuraton: `Part Time`,
    compnayName: 'Caribbean Union College',
    jobDescription: `Bridged the gap between education and IT support. Connected with faculty and staff to create a strong relationship between departments for overall increased computer literacy and connectivity. Oversee the school’s web-based infrastructure and develop programs that benefit students, faculty, and staff. Promoted digital bookkeeping, registration, and scheduling for increased productivity and drastically reduced waste. Active change agent directing the college toward web-based solutions and e-learning strategies.`,
  },
  {
    jobPosition: `Independant Contractor`,
    jobType: `Web Developer`,
    jobDuration: `Nov 2019 - Present`,
    timeDuraton: `Seasonal`,
    companyName: 'Kodelamp LLC',
    jobDescription: `As a WordPress developer and consultant, I spearheaded the development and management of WordPress websites for diverse clients. I developed a native WordPress plugin optimized for the Divi WordPress Page Builder, expertly configuring both back-end settings and front-end design for various themes. I provided valuable insights into security and optimization measures while working closely with the design team to create layouts supported by the plugin. Additionally, I resolved client issues via remote desktop support and created documentation and licensing features for easy installation and updates.`,
  },
  {
    jobPosition: `IT Adminstrator`,
    jobType: `Desktop Support | On-site`,
    jobDuration: `August 2016 - 2019`,
    timeDuraton: `Full Time`,
    compnayName: 'Caribbean Union College',
    jobDescription: `Effectively bridged the gap between education and IT support by fostering strong relationships between faculty, staff, and the IT department. This collaboration led to improved computer literacy and connectivity across all departments. Along the way, I acquired valuable skills in communication, cross-functional teamwork, and digital transformation.

    As part of my responsibilities, I oversaw the school's web-based infrastructure and developed programs that benefited students, faculty, and staff alike. I successfully implemented digital bookkeeping, registration, and scheduling systems, which not only increased productivity but also significantly reduced waste.
    
    As an active change agent, I guided the college towards embracing web-based solutions and e-learning strategies, keeping the institution at the forefront of educational technology and ensuring a modern, efficient learning environment for all..`,
  },
  {
    jobPosition: `Full-stack Independant Contractor`,
    jobType: `Freelance | Remote`,
    jobDuration: `Sep 2019 - Current`,
    timeDuraton: `Part Time`,
    compnayName: 'Kodelamp LLC',
    jobDescription: `Successfully developed a native WordPress plugin specifically tailored for the Elegant Themes Divi Theme. This plugin leverages CSS to manipulate the HTML DOM on mobile devices, offering full customization to front-end designers. Along the way, I acquired valuable skills in plugin development, CSS manipulation, and HTML DOM adjustments. Furthermore, I created comprehensive documentation and implemented a licensing feature to facilitate seamless plugin installation and updates. Collaborating closely with the design team, I ensured the plugin supported various layouts, thereby enhancing its overall versatility. My expertise in providing remote desktop support enabled me to efficiently resolve client issues and maintain a high level of customer satisfaction.`,
  },
];

const educatonContent = [
  {
    passingYear: '2016-2018',
    degreeTitle: 'BSc in Information technology',
    instituteName: 'University Hertfordshire',
  },
  {
    passingYear: '2022-2023',
    degreeTitle: 'Software Engineering Certification',
    instituteName: 'Practicum US by Yandex',
  },
  {
    passingYear: '2003-2005',
    degreeTitle: 'Adv. Dip in Electronics Technology',
    instituteName: 'The University of Trinidad and Tobago',
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
                process.env.PUBLIC_URL + 'img/border-dark.png'
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
