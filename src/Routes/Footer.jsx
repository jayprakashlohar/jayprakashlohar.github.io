import React from "react";
import styles from "../Module_css/Footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";
import Round from "../Images/Round.svg";

export const Footer = () => {
  function scrollTo() {
    scroll.scrollTo(0);
  }

  return (
    <div name="main_footer_link" className={styles.footer_mainDiv}>
      <div className={styles.footer_scrollup}>
        <IoIosArrowDropupCircle onClick={scrollTo} />
        {/* <img src={ Round} alt="" /> */}
      </div>
      <div className={styles.footer_outerDiv_icons}>
        <div>
          <a
            id="contact-linkedin"
            style={{ marginLeft: "0px" }}
            className="nav-not-active-link"
            target="_blank"
            href="https://www.linkedin.com/in/jay-prakash-lohar-571823236/"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a
            id="contact-github"
            style={{ marginLeft: "0px" }}
            className="nav-not-active-link"
            target="_blank"
            href="https://github.com/jayprakashlohar"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            id="contact-email"
            style={{ marginLeft: "0px" }}
            className="nav-not-active-link"
            target="_blank"
            href="mailto:loharjayprakash4@gmail.com"
          >
            <FiMail />
          </a>
        </div>
      </div>
      <div className={styles.footer_address_numberDiv} id="contact">
        <div>
          <TiLocation />
          <p>Rajasthan, India</p>
        </div>
        <div>
          <FiMail />
          <p id="contact-email">loharjayprakash4@gmail.com</p>
        </div>
        <div>
          <FiSmartphone />
          <p id="contact-phone">(+91) 8875140357</p>
        </div>
      </div>
      <div className={styles.footer_designBy}>
        <p> ©️ 2022,Jay Prakash</p>
      </div>
    </div>
  );
};
