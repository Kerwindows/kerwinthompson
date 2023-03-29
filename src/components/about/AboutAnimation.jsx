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
                    I was born and raised in the island of Trinidad and Tobago
                    but I currently live in the USA. I love to code and create
                    web application elements for amazing people like you. I was
                    a teacher for nine years prior turning my passion into a
                    career.
                  </p>
                  <p>
                    What can I say, I love coding. I'm a dedicated professional
                    with over 5 years of experience in Full-Stack web
                    development. I pay solid attention to detail and as a
                    freelancer and an agency owner myself, I know what it takes
                    to work closely with clients throughout the development
                    processes for a truly personalized user experience. Let's
                    network. New people bring new experiences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Kerwin Thompson</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>21st Dec 1984</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>37 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Orlando, FL</span>
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
                        <li>
                          <label>GitHub: </label>
                          <span>kerwindows</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
