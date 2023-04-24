import React from "react";
import styles from "../Module_css/Skills.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { StyledIcon_react } from "../Styled/DeviconIcon";
import { EveryHeading, EveryHeading2 } from "../Styled/NavbarDiv";

export const Skills = () => {
  return (
    <div
      name="main_skill_link"
      className={styles.skill_MainOuterDiv}
      id="skills"
    >
      <div className={styles.skill_mainHeading}>
        <EveryHeading>Skills</EveryHeading>
      </div>
      <div className={styles.skill_gridMain}>
        <div>
          <StyledIcon_react className="devicon-html5-plain-wordmark colored"></StyledIcon_react>
          <EveryHeading2>HTML5</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-css3-plain-wordmark colored"></StyledIcon_react>
          <EveryHeading2>CSS3</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-javascript-plain colored"></StyledIcon_react>
          <EveryHeading2>JAVASCRIPT</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-react-original colored"></StyledIcon_react>
          <EveryHeading2>REACT</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-redux-original"></StyledIcon_react>
          <EveryHeading2>REDUX</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-nextjs-original"></StyledIcon_react>
          <EveryHeading2>NEXT JS</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-nodejs-plain colored"></StyledIcon_react>
          <EveryHeading2>NODE JS</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-mongodb-plain colored"></StyledIcon_react>
          <EveryHeading2>MONGO DB</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-express-original colored"></StyledIcon_react>
          <EveryHeading2>EXPRESS</EveryHeading2>
        </div>
        <div>
          <StyledIcon_react className="devicon-github-original"></StyledIcon_react>
          <EveryHeading2>GITHUB</EveryHeading2>
        </div>
      </div>
    </div>
  );
};
