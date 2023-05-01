import React from "react";
import styles from "../Module_css/Projects.module.css";
import styles1 from "../Module_css/About.module.css";
import purplle from "../Images/purpllePic1.png";
import PrimeVideo from "../Images/PrimevideoPic1.png";
import hashnode from "../Images/hashnode.png";
import bestBuy from "../Images/bestbuy3.png";
import apple from "../Images/Apple.png";
import {
  Icon_small,
  StyledIcon_react,
  StyledIcon_react_small,
} from "../Styled/DeviconIcon";
import styled from "styled-components";
import { EveryHeading } from "../Styled/NavbarDiv";

export const Projects = () => {
  return (
    <div
      name="main_projects_link"
      className={styles.mainProjects}
      id="projects"
    >
      <EveryHeading>PROJECTS</EveryHeading>
      <div className={styles.mainProjects_mainDiv}>
        <div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={PrimeVideo} alt="" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              {" "}
              <h2>File Sharing App</h2>
              <p>
                This File Sharing App enable user to signup/login, upload a file
                from the comfort of your own device, setting a password to
                protect it, and sharing it with others in a matter of minutes.
                With just a link, anyone can access the file and download it
                with ease. This was a individual project which was done by me in
                7-days using NextJS, Redux, Mongodb, ExpressJS, NodeJS and
                Chakra-UI.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a target="_blank" href="https://filesharing-app.vercel.app/">
                  <button className={styles1.viewDemoButton}>View Demo</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/jayprakashlohar/FileSharing-App"
                >
                  <button className={styles1.viewDemoButton}>
                    View Source
                  </button>
                </a>
              </div>
              <div
                className={
                  styles.mainProjects_mainDiv_project1_summary_flex_icon
                }
              >
                <Icon_small className="devicon-react-original-wordmark colored"></Icon_small>
                <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                <Icon_small className="devicon-javascript-plain colored"></Icon_small>
                <Icon_small className="devicon-express-original colored"></Icon_small>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={apple} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">Apple Hub</h2>
                <p className="project-description">
                  It's a MERN Stack E-commerce web application with all the
                  major functionalities.This was a individual project which was
                  done by me in 5-days using HTML, CSS, JavaScript ,ReactJS,
                  Mongodb,Express js,Node js and Chakra-UI.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://apple-hub-orignal.netlify.app/"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/jayprakashlohar/e-commers-app#Contact"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <Icon_small className="devicon-react-original-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-javascript-plain colored"></Icon_small>
                  <Icon_small className="devicon-express-original colored"></Icon_small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={hashnode} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">Bestbuy</h2>
                <p className="project-description">
                  Shop Best Buy for electronics, computers, appliances, cell
                  phones, video games & more new tech. In-store pickup & free
                  2-day shipping on thousands of items. This was a collaborative
                  project which was done by me and 4 other members in 5-days
                  using ReactJS, Redux, HTML, CSS, Chakra-UI, NodeJS, Express
                  and Mongodb.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://review-bestbuy.netlify.app/"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/itsAkash12/united-cobweb-7806"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <Icon_small className="devicon-react-original-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-javascript-plain colored"></Icon_small>
                  <Icon_small className="devicon-express-original colored"></Icon_small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={bestBuy} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">NNNOW</h2>
                <p className="project-description">
                  NNNOW is an E-commerce website where users Shopping for Men,
                  Women, and Kids products. Buy a wide range of branded clothes,
                  apparel, accessories, shoes online at NNNOW.com. This was a
                  collaborative project which was done by me and 4 other members
                  in 5-days using ReactJS, HTML, CSS, SCSS, Chakra-UI, Redux,
                  NodeJS, Express and Mongodb.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://trendy-vibes-imdebabrata-imdebabrata.vercel.app/"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/vepada-sateesh/diligent-pies-1359"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <Icon_small className="devicon-react-original-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-javascript-plain colored"></Icon_small>
                  <Icon_small className="devicon-express-original colored"></Icon_small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={purplle} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">Google Digital Garage</h2>
                <p className="project-description">
                  Accelerate your career or business with an online digital
                  skills course in everything from marketing to coding and
                  beyond. Discover courses in topics designed to help expand
                  your career, business and horizons and to upgrade your skills
                  for a new digital world This was a collaborative project which
                  was done by me and 4 other members in 5-days using HTML, CSS,
                  JavaScript.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://fastidious-nougat-4b59ee.netlify.app/"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/imrangadwal10/zonked-instrument-5361"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <Icon_small className="devicon-html5-plain-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-css3-plain-wordmark colored"></Icon_small>
                  <Icon_small className="devicon-javascript-plain colored"></Icon_small>
                  <Icon_small className="devicon-express-original colored"></Icon_small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
