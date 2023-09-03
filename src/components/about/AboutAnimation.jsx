import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Awards from "../award/AwardsAnimation";
import kerwin from "../../assets/img/about/kerwin.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div> */}

          {/* <Awards /> */}
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(img/border-dark.png)`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(img/border-dark.png)`,
            }}
          ></div>
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src={`${kerwin}`} alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Software Engineer</p>
                  <h3>Kerwin Thompson</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                    I consider myself a skilled software engineer with a
                    background in education. I spent nine years as a
                    professional teacher before transitioning into the field of
                    software engineering. My specialization lies in full-stack
                    development, and I am passionate about delivering seamless
                    and engaging digital experiences for users. My expertise
                    spans web app development, UX/UI design, and Information Systems.
                    I have worked on a diverse range of projects,
                    including travel and social networking apps, as well as
                    school information management systems.
                  </p>
                  <p>
                    I consider myself a detail-oriented, dedicated professional
                    who thrives on collaboration and networking with fellow
                    developers and engineers. I believe that teamwork and
                    community are vital for driving innovation and excellence.
                    With a strong interest in antiquity, archaeology, and
                    history, I am an enthusiastic, humorous, and sometimes
                    moralistic individual who enjoys engaging in
                    thought-provoking conversations. My curiosity and love for
                    foreign places and languages constantly push me to expand my
                    horizons, and I firmly believe that every experience in life
                    offers an opportunity for growth and learning.
                  </p>
                </div>
                {/* <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Kerwin Thompson</span>
                        </li>                       
                        <li>
                          <label>Address: </label>
                          <span>Clarksville, TN</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+1) 786 679 6542</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>kerwindows@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
        </div>
      </section>
    </>
  );
};

export default About;
