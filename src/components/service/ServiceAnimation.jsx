import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web App Development",
    descriptions: `As a proficient web application developer, I specialize in creating efficient, robust, and user-friendly applications tailored to your needs. Leveraging cutting-edge technologies and frameworks, I transform your vision into a functional and engaging digital experience.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "UX/UI Design",
    descriptions: `My expertise in UI/UX design ensures that your digital products not only look visually appealing but also provide a seamless user experience. By focusing on usability, accessibility, and user satisfaction, I design interfaces that drive engagement and foster customer loyalty.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Technical Support",
    descriptions: `With a strong background in technical support, I am adept at troubleshooting and resolving a wide range of issues. My dedication to customer satisfaction, combined with my ability to communicate effectively, ensures that you receive timely assistance and a satisfactory resolution.`,
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
