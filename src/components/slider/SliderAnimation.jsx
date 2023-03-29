import React from "react";
import TextLoop from "react-text-loop";
import kerwin from "../../assets/img/slider/kerwin.png";

const conctInfo = {
  phone: "+1 786 679 6542",
  email: "kerwin@kerwindows.com",
};

const sliderContent = {
  name: "Kerwin Thompson",
  designation: "Software Engineer",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern web applications, web
  services and online stores.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section style={{ background: "#000" }} id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+17866796542">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:kerwin@kerwindows.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              {/* <li>
                <a href="#">FR</a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Full-stack Developer</p>
                    <p className="loop-text lead">Frontend Deeloper</p>
                    <p className="loop-text lead">Web Application Developer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="file/Kerwin-Thompson-Resume.docx"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        {/* <Tilt> */}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${kerwin})`,
            //height: "1000px",
            // top: "-750px",
          }}
        ></div>
        {/* </Tilt> */}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
