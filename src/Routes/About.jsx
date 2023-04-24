import React from "react";
import Bhanu from "../Images/Bhanu1.png";
import styles from "../Module_css/About.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

export const About = () => {
  return (
    <>
      <div id="main_about_link" className={styles.mainAboutDiv}>
        <div className={styles.about_outerDivImg}>
          <div className={styles.about_InnerDivImg} id="home">
            <img class="home-img" src={Bhanu} alt="" />
          </div>
        </div>
        <div className={styles.about_nameH1Div} id="user-detail-name">
          <h1>
            <span className={styles.about_hii}> Hi, &nbsp;</span>
            <span>
              {" "}
              <span id={styles.hiIam}>I am</span> Jay Prakash Lohar
            </span>
          </h1>
        </div>
        <div className={styles.about_devH3Div} id="about">
          <h3>Full Stack Developer</h3>
        </div>
        <div className={styles.about_descPDiv} id="user-detail-intro">
          <p>
            A passionate programmer with a curious mind who loves solving
            problems. I have an experience of building Web applications with
            JavaScript / Reactjs / HTML / CSS etc. I'm currently actively
            looking for new opportunities
          </p>
        </div>
        <div className={styles.about_outerDiv_icons}>
          <div id="contact-linkedin">
            <a
              style={{ marginLeft: "0.27em" }}
              className="nav-not-active-link"
              target="_blank"
              href="https://www.linkedin.com/in/jay-prakash-lohar-571823236/"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div id="contact-github">
            <a
              style={{ marginLeft: "0px" }}
              className="nav-not-active-link"
              target="_blank"
              href="https://github.com/jayprakashlohar"
            >
              <FaGithub />
            </a>
          </div>
          <div id="contact-email">
            <a
              style={{ marginLeft: "0px" }}
              className="nav-not-active-link"
              target="_blank"
              href="mailto:loharjayprakash4@gmail.com"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className={styles.about_address_numberDiv}>
          <div>
            <TiLocation />
            <p>Rajasthan, India</p>
          </div>
          <div id="contact-phone">
            <FiSmartphone />
            <p>(+91) 8875140357</p>
          </div>
        </div>
        <div className={styles.resumeButtonDiv}>
          <a href="Jayprakash_Resume.pdf" download>
            <button className={styles.resumeButton}>Resume</button>
          </a>
        </div>
      </div>
    </>
  );
};
