import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team_1 from "../../assets/img/testimonial/team-1.jpg";
import team_2 from "../../assets/img/testimonial/team-2.jpg";
import team_3 from "../../assets/img/testimonial/team-3.jpg";
import team_4 from "../../assets/img/testimonial/team-4.jpg";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    
    {
      imageName: team_2,
      desc: `I would be happy to work with Kerwin at any time due to his exceptional attention to detail and strong work ethic. His reputation is of utmost importance to him, which is a testament to the quality of his work.`,
      reviewerName: "Yonanni Emmanuel",
      designation: "CEO at Cyversify Ltd",
      delayAnimation: "200",
    },
    {
      imageName: team_3,
      desc: `Kerwin is an exceptional team player and collaborator. He was always willing to lend a hand and contribute with his expertise. He was also a great communicator, able to articulate complex technical concepts with ease and clarity.`,
      reviewerName: "Max Jacobson",
      designation: "Senior Software Engineer at Republic Services",
      delayAnimation: "400",
    },
    {
      imageName: team_4,
      desc: `Thanks to his unwavering dedication and tireless work ethic, our school has benefited greatly from his innovative thinking. He spearheaded the development of our online registration system, established a comprehensive school database, and launched our edu website that has greatly improved our institution's online presence.`,
      reviewerName: "Avionne Sampson",
      designation: "Finance Manager at Caribbean Union College",
      delayAnimation: "600",
    },
    {
      imageName: team_1,
      desc: `Kerwin was a fabulous student. He always pushed through the challenges and brought up good questions whenever he needed to clear his path. He's good enough that now he's going the extra mile and helping students as one of our senior students (effectively a TA).`,
      reviewerName: "Phoenix Eliot",
      designation: "Full Stack Independent Contractor & Tutor",
      delayAnimation: "",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img src={`${val.imageName}`} alt="review comments"></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
