import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      imageName: "team-1",
      desc: `Kerwin is well skilled at what he does and shows leadership qualities 
      that make him an invaluable. I would love to have him on my team any day.`,
      reviewerName: "Jemila Douglas",
      designation: "CFO at Kerjem marketing Technologies",
      delayAnimation: "",
    },
    {
      imageName: "team-2",
      desc: `Kerwin is quite meticulous in his work. 
      His reputation is paramount and his work ethic is the reason I'll work with him anytime.`,
      reviewerName: "Yonanni Emmanuel",
      designation: "CEO at Cyversify ",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: `Very dedicated and hard-working. Through his creative 
      thinking our school now possesses an online registration system, a school database and an edu website.`,
      reviewerName: "Avionne Sampson",
      designation: "Finance Manager at Caribbean Union College",
      delayAnimation: "400",
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
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
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
