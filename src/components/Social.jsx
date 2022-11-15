import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithubAlt
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/kerwinbendavid" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/kerwindows/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/kerwindows" },
  { Social: <FaGithubAlt />, link: "https://github.com/kerwindows" },
  { Social: <FaWhatsapp />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
