import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import checkinApp from "../../assets/img/portfolio/checkin-app.jpg";
import cucedutt from "../../assets/img/portfolio/cuc.edu.tt.png";
import dmf from "../../assets/img/portfolio/divimobifirst-landingpage.png";
import estoreWearPositive from "../../assets/img/portfolio/estore-wearpositive.jpg";
import linkwiPreview from "../../assets/img/portfolio/linkwi-preview.jpg";
import linkwiChleo from "../../assets/img/portfolio/linkwi-chleo.png";
import linkwiKerwinEdit from "../../assets/img/portfolio/linkwi-kerwin-edit.jpg";
import linkwiKerwinEditLinks from "../../assets/img/portfolio/linkwi-kerwin-edit-links.jpg";
import linkwiDashboard from "../../assets/img/portfolio/linkwi-dashboard.png";
import linkwiDashboard2 from "../../assets/img/portfolio/linkwi-dashboard2.png";
import linkwiDashboard3 from "../../assets/img/portfolio/linkwi-dashboard3.png";
import checkinMenu from "../../assets/img/portfolio/checkin-menu.jpg";
import checkinttTaxiDriver from "../../assets/img/portfolio/checkin-tt-taxi-driver.jpg";
import checkinttProfilepage from "../../assets/img/portfolio/checkin-tt-profilepage.jpg";
import checkinMapPage from "../../assets/img/portfolio/checkin-map-page.jpg";
import checkinTaxiPage from "../../assets/img/portfolio/checkin-taxi-page.jpg";
import checkinttLandingPage from "../../assets/img/portfolio/checkin-tt-landing-page.jpg";
import estoreShopPage from "../../assets/img/portfolio/estore-shop-page.jpg";
import ecommerceStoreCustomTshirt from "../../assets/img/portfolio/ecommerce-store-custom-tshirt.jpg";
import ecommerceStoreKidSweater from "../../assets/img/portfolio/ecommerce-store-kid-sweater.jpg";
import scanCheckinSiteSettings from "../../assets/img/portfolio/scan-checkin-site-settings.jpg";
import scanCheckinCuc from "../../assets/img/portfolio/scan-checkin-cuc.jpg";
import scanCheckinSstaff from "../../assets/img/portfolio/scan-checkin-staff.jpg";
import cucScancheckinClassroom from "../../assets/img/portfolio/cuc-scancheckin-classroom.jpg";
import cucScancheckin from "../../assets/img/portfolio/cuc-scancheckin.jpg";
import trailerViewFull from "../../assets/img/portfolio/trailer-view-full.png";
import trailerViewDiscover from "../../assets/img/portfolio/trailer-view-discover.png";
import trailerViewWick from "../../assets/img/portfolio/trailer-view-wick.png";
import trailerViewHart from "../../assets/img/portfolio/trailer-view-hart.png";
import trailerViewBoots from "../../assets/img/portfolio/trailer-view-boots.png";
import trailerViewLuck from "../../assets/img/portfolio/trailer-view-luck.png";
import trailerViewMobile from "../../assets/img/portfolio/trailer-view-mobile.png";
import aroundReactLogin from "../../assets/img/portfolio/around-react-login.jpg";
import aroundReactEditProfile from "../../assets/img/portfolio/around-react-editprofile.jpg";
import aroundReact2 from "../../assets/img/portfolio/around-react2.jpg";
import iamshurnelleCom from "../../assets/img/portfolio/iamshurnelle.com.jpg";

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
  "Meme Sharing App",
  "Netflix UI CLone",
  "Other Projects",
];
const tabListContent = [
  {
    portfolioItems: [
      //all
      {
        img: checkinApp,
        width: 400,
        height: 550,
        title: "Checkin TT",
        subTitle: "Profile page",
        alterText: "PHP/ Ajax application",
        delayAnimation: "",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: trailerViewDiscover,
        width: 752,
        height: 423,
        title: "Trailer View App",
        subTitle: "Prview Movie Trailers ia Youtune",
        alterText: "Click link to view profile page",
        delayAnimation: "100",
        portfolioLink: "https://trailerview.kerwindows.comr",
      },

      {
        img: trailerViewMobile,
        width: 936,
        height: 1906,
        title: "Trailer View App",
        subTitle: "Netflix UI Clone",
        alterText: "Built with ReactJS",
        delayAnimation: "200",
        portfolioLink: "https://trailerview.kerwindows.com",
      },
      {
        img: aroundReact2,
        width: 701,
        height: 717,
        title: "Around React",
        subTitle: "Meme Sharing App",
        alterText: "Build with the MERN Stack. Hosted on Google Cloud",
        delayAnimation: "0",
        portfolioLink: "https://kerwindows.students.nomoredomainssbs.ru/",
      },
      {
        img: linkwiPreview,
        width: 400,
        height: 550,
        title: "Linkwi NFC Business Card",
        subTitle: "Linkwi profile",
        alterText: "Built with Vanilla JavaScript and jQuery",
        delayAnimation: "0",
        portfolioLink: "https://linkwi.co/card/chleo",
      },

      {
        img: estoreWearPositive,
        width: 400,
        height: 550,
        title: "Ecommerce Clothing Store",
        subTitle: "Built with PHP and JavaScript",
        alterText: "E-store landing page. Built since 2018",
        delayAnimation: "0",
        portfolioLink: "http://estore.kerwindows.com/",
      },
    ],
  },
  {
    portfolioItems: [
      //linkwi
      {
        img: linkwiChleo,
        width: 489,
        height: 854,
        title: "Linkwi Web Application",
        subTitle: "Linkwi Web Application",
        alterText: "Click link to view profile page",
        delayAnimation: "100",
        portfolioLink: "https://linkwi.co/card/chleo",
      },
      {
        img: linkwiKerwinEdit,
        width: 470,
        height: 700,
        title: "My Linkwi profile",
        subTitle: "Edit profile page",
        alterText: "Click link to view profile page",
        delayAnimation: "",
        portfolioLink: "https://linkwi.co/card/kerwinthompson",
      },
      {
        img: linkwiKerwinEditLinks,
        width: 470,
        height: 700,
        title: "My Linkwi profile",
        subTitle: "Edit  my project links",
        alterText: "Click link to view profile page example",
        delayAnimation: "300",
        portfolioLink: "https://linkwi.co/card/kerwinthompson",
      },
      {
        img: linkwiDashboard,
        width: 1800,
        height: 1198,
        title: "Dashboard",
        subTitle: "Linkwi Web Application",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/2jUaGwwnA7E",
      },
      {
        img: linkwiDashboard2,
        width: 1800,
        height: 1190,
        title: "View social stats",
        subTitle: "Linkwi statistics dashboard",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/2jUaGwwnA7E",
      },
      {
        img: linkwiDashboard3,
        width: 1800,
        height: 1416,
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
        img: checkinMenu,
        title: "Chatting Application",
        subTitle: "Codecanyon Market",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: checkinttTaxiDriver,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: checkinttProfilepage,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        //Checkin TT
        img: checkinMapPage,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink: "https://projectone.cyversify.com/",
      },

      {
        img: checkinTaxiPage,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink: "https://projectone.cyversify.com/",
      },
      {
        img: checkinttLandingPage,
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
        img: cucScancheckinClassroom,
        title: "Classroom Statistics",
        subTitle: "Student Management",
        alterText: "Click link for demo",
        delayAnimation: "",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: cucScancheckin,
        title: "Human Resource Management",
        subTitle: "Student Profile",
        alterText: "Click link for demo",
        delayAnimation: "100",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: scanCheckinSiteSettings,
        title: "Human Resource Management",
        subTitle: "Site settings",
        alterText: "Click link for demo",
        delayAnimation: "100",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: scanCheckinCuc,
        title: "Admin Dashboard",
        subTitle: "Compound Entry Dashboard",
        alterText: "Click link for demo",
        delayAnimation: "200",
        portfolioLink: "https://youtu.be/T33ovXlQPVI",
      },
      {
        img: scanCheckinSstaff,
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
        img: estoreShopPage,
        title: "Ecommerce Store Shop Page",
        subTitle: "Shop page with filter",
        alterText: "Built with LAMP Stack with Vanilla JavaScript",
        delayAnimation: "",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },
      {
        img: ecommerceStoreCustomTshirt,
        title: "Ecommerce Store",
        subTitle: "Create Your Own Custom T-Shirt",
        alterText: "Built with LAMP Stack with Vanilla JavaScript",
        delayAnimation: "100",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },

      {
        img: ecommerceStoreKidSweater,
        title: "Ecommerce Store",
        subTitle: "Product bundle",
        alterText: "Built with LAMP Stack with Vanilla JavaScript",
        delayAnimation: "200",
        portfolioLink: "http://estore.kerwindows.com/shop.php",
      },
    ],
  },
  {
    portfolioItems: [
      //meme app
      {
        img: aroundReactLogin,
        title: "Meme Sharing App",
        subTitle: "Login page",
        alterText: "React App",
        delayAnimation: "",
        portfolioLink: "https://kerwindows.students.nomoredomainssbs.ru/",
      },
      {
        img: aroundReact2,
        width: 701,
        height: 717,
        title: "Meme Sharing App",
        subTitle: "Share Funnyh Memes",
        alterText: "Built with the MERN Stack",
        delayAnimation: "100",
        portfolioLink: "https://kerwindows.students.nomoredomainssbs.ru/",
      },

      {
        img: aroundReactEditProfile,
        width: 840,
        height: 796,
        title: "Meme Sharing App",
        subTitle: "Share Funnyh Memes",
        alterText: "Built with the MERN Stack",
        delayAnimation: "200",
        portfolioLink: "https://kerwindows.students.nomoredomainssbs.ru/",
      },
    ],
  },
  {
    portfolioItems: [
      //netflix ui clone
      {
        img: trailerViewWick,
        width: "800",
        height: "1629",
        title: "Trailer View App",
        subTitle: "View Movie Trailers Via YouTube",
        alterText: "React App",
        delayAnimation: "100",
        portfolioLink:
          "https://trailerview.kerwindows.com/discover/movie/603692",
      },
      {
        img: trailerViewBoots,
        width: "480",
        height: "854",
        title: "Trailer View App",
        subTitle: "View Movie Trailers Via YouTube",
        alterText: "React App",
        delayAnimation: "100",
        portfolioLink: "https://trailerview.kerwindows.com/discover/",
      },
      {
        img: trailerViewFull,
        width: "800",
        height: "1848",
        title: "Trailer View App",
        subTitle: "View Movie Trailers Via YouTube",
        alterText: "React App",
        delayAnimation: "",
        portfolioLink: "https://trailerview.kerwindows.com/discover",
      },

      {
        img: trailerViewHart,
        width: "1800",
        height: "854",
        title: "Trailer View App",
        subTitle: "View Movie Trailers Via YouTube",
        alterText: "React App",
        delayAnimation: "100",
        portfolioLink:
          "https://trailerview.kerwindows.com/discover/movie/1077280",
      },
      {
        img: trailerViewLuck,
        width: "1800",
        height: "961",
        title: "Trailer View App",
        subTitle: "View Movie Trailers Via YouTube",
        alterText: "React App",
        delayAnimation: "100",
        portfolioLink: "https://trailerview.kerwindows.com/discover/",
      },
    ],
  },
  {
    portfolioItems: [
      //others
      {
        img: cucedutt,
        width: 1800,
        height: 6154,
        title: "Caribbean Union College Secondary School",
        subTitle: "student Database Landing Page",
        alterText: "Front-end landing page built with WordPress",
        delayAnimation: "100",
        portfolioLink: "https://cuc.edu.tt/",
      },
      {
        img: dmf,
        width: 1800,
        height: 9734,
        title: "Divi Mobi First",
        subTitle: "WordPRess Plugin Website",
        alterText: "Built with Divi Theme",
        delayAnimation: "200",
        portfolioLink: "https://divimobifirst.com",
      },
      {
        img: iamshurnelleCom,
        title: "I Am Shurnelle",
        width: 1800,
        height: 7253,
        subTitle: "Shurnelle Music Website",
        alterText: "Built with WordPRess",
        delayAnimation: "200",
        portfolioLink: "https://iamshurnelle.com",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
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

                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>
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
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
