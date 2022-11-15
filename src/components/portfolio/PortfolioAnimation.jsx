import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = [
  "All",
  "Linkwi",
  "CheckinTT",
  "School Management",
  "Ecommerce",
];
const tabListContent = [
  {
    portfolioItems: [
      //all
      {
        img: "checkin-app",
        title: "Checkin TT",
        subTitle: "Profile page",
        alterText: "PHP/ Ajax application",
        delayAnimation: "",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: "cuc.edu.tt",
        title: "Caribbean Union College Secondary School",
        subTitle: "student Database Landing Page",
        alterText: "Front-end landing page built with WordPress",
        delayAnimation: "100",
        portfolioLink: "https://cuc.edu.tt/",
      },

      {
        img: "dmf",
        title: "Divi Mobi First",
        subTitle: "My personal PWordPRess Plugin",
        alterText: "Built with Divi Theme for WordPress",
        delayAnimation: "200",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },
      {
        img: "estore-wearpositive",
        title: "Ecommerce Clothing Store",
        subTitle: "Built with PHP and JavaScript",
        alterText: "E-store landing page. Built since 2018",
        delayAnimation: "0",
        portfolioLink: "http://estore.kerwindows.com/",
      },
      {
        img: "linkwi-preview",
        title: "Linkwi NFC Business Card",
        subTitle: "Linkwi profile",
        alterText: "Built with Vanilla JavaScript and jQuery",
        delayAnimation: "0",
        portfolioLink: "https://linkwi.co/card/chleo",
      },
      {
        img: "around-theius",
        title: "Around the US",
        subTitle: "Share images from around the US",
        alterText: "Build with ReactJS. Hosted on GitHub",
        delayAnimation: "0",
        portfolioLink: "https://kerwindows.github.io/around-react/",
      },
    ],
  },
  {
    portfolioItems: [
      //linkwi
      {
        img: "linkwi-kerwin",
        title: "Linkwi Web Application",
        subTitle: "Linkwi Web Application",
        alterText: "Click link to view profile page",
        delayAnimation: "100",
        portfolioLink: "https://linkwi.co/card/kerwinthompson",
      },
      {
        img: "linkwi-kerwin-edit",
        title: "My Linkwi profile",
        subTitle: "Edit profile page",
        alterText: "Click link to view profile page",
        delayAnimation: "",
        portfolioLink: "https://linkwi.co/card/kerwinthompson",
      },
      {
        img: "linkwi-kerwin-edit-links",
        title: "My Linkwi profile",
        subTitle: "Edit  my project links",
        alterText: "Click link to view profile page example",
        delayAnimation: "300",
        portfolioLink: "https://linkwi.co/card/kerwinthompson",
      },
      {
        img: "linkwi-backend",
        title: "Backend profile edit",
        subTitle: "Linkwi Web Application",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/2jUaGwwnA7E",
      },
      {
        img: "linkwi-stats",
        title: "View social stats",
        subTitle: "Linkwi statistics dashboard",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/2jUaGwwnA7E",
      },
      {
        img: "linkiw-links-history",
        title: "View link click stats",
        subTitle: "Linkwi statistics dashboard",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/2jUaGwwnA7E",
      },
    ],
  },
  {
    portfolioItems: [
      {
        img: "checkin-menu",
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: "checkintt-taxt-driver",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: "checkingtt-profilepage",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        //Checkin TT
        img: "checkin-map-page",
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink: "https://projectone.cyversify.com/",
      },

      {
        img: "checkin-taxi-page",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: "checkintt-landing-page",
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
    ],
  },
  {
    portfolioItems: [
      //school database
      {
        img: "cuc-scancheckin-classroom",
        title: "Classroom Statistics",
        subTitle: "Student Management",
        alterText: "Click link for demo",
        delayAnimation: "",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },

      {
        img: "cuc-scancheckin",
        title: "Human Resource Management",
        subTitle: "Student Profile",
        alterText: "Click link for demo",
        delayAnimation: "100",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: "scancheckin-site-settings",
        title: "Human Resource Management",
        subTitle: "Site settings",
        alterText: "Click link for demo",
        delayAnimation: "100",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: "scancheckin-cuc",
        title: "Admin Dashboard",
        subTitle: "Compound Entry Dashboard",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: "scan-checkin-staff",
        title: "Admin Dashboard",
        subTitle: "Compound Entry Dashboard",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
    ],
  },
  {
    portfolioItems: [
      //ecommerce
      {
        img: "estore-shop-page",
        title: "Ecommerce Store Shop Page",
        subTitle: "Shop page with filter",
        alterText: "Built with LAMP Stack with Vanilla JavaScript",
        delayAnimation: "",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },
      {
        img: "ecommerce-store-custom-t-shirt",
        title: "Ecommerce Store",
        subTitle: "Create Your Own Custom T-Shirt",
        alterText: "Built with LAMP Stack with Vanilla JavaScript",
        delayAnimation: "100",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },

      {
        img: "ecommerce-store-kid-sweater",
        title: "Ecommerce Store",
        subTitle: "Product bundle",
        alterText: "Built with LAMP Stack with Vanilla JavaScript",
        delayAnimation: "200",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            {tabListContent.map((tabContent, i) => (
              <TabPanel key={i}>
                <div className="portfolio-content ">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {tabContent.portfolioItems.map((val, i) => (
                      <div
                        className="portfolio-box-01"
                        key={i}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay={val.delayAnimation}
                      >
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a
                                href={val.portfolioLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            className="portfolio-icon"
                            href={val.portfolioLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiLink />
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    ))}
                  </Masonry>
                </div>
                {/* End list wrapper */}
              </TabPanel>
            ))}
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
