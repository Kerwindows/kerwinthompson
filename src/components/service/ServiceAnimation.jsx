import React from 'react';

const ServiceContent = [
  {
    icon: 'icon-mobile',
    title: 'Web App Development',
    descriptions: `Specialized in creating efficient, robust, and user-friendly applications tailored to your needs. Leveraging cutting-edge technologies and frameworks, transforming visions into functional and engaging digital experiences.`,
    delayAnimation: '',
  },
  {
    icon: 'icon-desktop',
    title: 'UX/UI Design',
    descriptions: `Ensuring that online experiences not only look visually appealing but also provide a seamless user experience. Designing interfaces that drive engagement and foster customer loyalty , by focusing on usability, accessibility, and user satisfaction.`,
    delayAnimation: '200',
  },
  {
    icon: 'icon-target',
    title: 'Technical Support',
    descriptions: `Adept at troubleshooting and resolving a wide range of issues. Dedicated to customer satisfaction, combined with my ability to communicate effectively, ensuring that the clients receive timely assistance and a satisfactory resolution.`,
    delayAnimation: '400',
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
