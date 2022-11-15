import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Application Development",
    descriptions: `Solve problems by synthesizing and disseminating complex information into web based solutions for real time implementation.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "UX/UI Design Consultation",
    descriptions: `Resolute problems with the user interface to determine potential user experience drawbacks.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Technical Support",
    descriptions: `Update and maintain a company's website while also handling customer technical support cases through phone and email submission`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
