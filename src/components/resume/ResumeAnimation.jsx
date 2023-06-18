import React from 'react';
import Skills from '../skills/Skills';

const resumeContent = [
  {
    jobPosition: `Software Developer`,
    jobType: `Cyversify Limited | Remote`,
    jobDuration: `2020 - Present`,
    timeDuraton: `Contract`,
    compnayName: 'Cyversify',
    jobDescription: `Significantly contributed to various custom web-based applications by actively participating in all stages of the Software Development Life Cycle (SDLC). This involves rigorous requirements analysis, Agile SCRUM ceremonies, reviews and retrospectives, solution diagrams, flowcharts, and other core solution documents making it accessible for cross-functional teams and clients. Writing clean, scalable code based on requirements and design. Excelling at deploying and debugging applications while performing unit testing to maintain quality control. Regular refactoring and updates have been a key strategy in improving existing applications. Technologies employed during these experiences include JavaScript, React, NodeJS, PHP, SQL, Ajax, RESTful API, and Google Cloud, making me adept at both frontend and backend development, including aspects like application architecture, database selection and creation, and UI/UX design and logic.`,
  },

  {
    jobPosition: `Systems Adminstrator`,
    jobType: `Tech Support | Remote`,
    jobDuration: `2020 - Present`,
    timeDuraton: `Contract`,
    compnayName: 'Caribbean Union College',
    jobDescription: `Responsible for an array of activities that spanned from technical support to the management of our school's online platform. Role involved proposing innovative software solutions for development, refactoring, and deployment of school's System Information Management (SIS) application, streamlining the management of vital information, boosting productivity by an estimated 50%. Creation of an online registration website, which enhanced administrative productivity by an estimated 80%, minimized registration time by 60%, and resulted in a 20% savings in paper expenses. Management system implemented led to a 30% improvement in attendance tracking accuracy and a 40% reduction in administrative workload. This user-friendly platform boasted 99% uptime and showed a 15% improvement in system performance.`,
  },
  {
    jobPosition: `Full-stack Independant Contractor`,
    jobType: `Freelance | Remote`,
    jobDuration: `Sep 2019 - Current`,
    timeDuraton: `Part Time`,
    compnayName: 'Kodelamp LLC',
    jobDescription: `Successfully developed a native WordPress plugin tailored for the Elegant Themes Divi Theme. Created comprehensive documentation and implementing a licensing feature to enable seamless plugin installation and updates. Concurrently providing remote desktop support, resolving client issues efficiently to maintain high customer satisfaction. Expanded role to leading the development and management of WordPress websites for a diverse clientele, which included devising a WordPress plugin optimized for the Divi Wordpress Page Builder. Expertly configuring both backend settings and frontend design for numerous themes, I also served as a consultant, imparting valuable insights into security and optimization measures.`,
  },
];

const educatonContent = [
  {
    passingYear: '2022-2023',
    degreeTitle: 'Software Engineering Certification',
    instituteName: 'TripleTen',
  },
  {
    passingYear: '2016-2018',
    degreeTitle: 'BSc in Information technology',
    instituteName: 'University Hertfordshire',
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
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{' '}
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
                    <p>{val.instituteName}</p>{' '}
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
