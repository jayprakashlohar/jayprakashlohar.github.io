import {
  NavbarDiv,
  NavbarLi,
  NavbarMainDiv,
  NavbarHam,
} from "../Styled/NavbarDiv";
import logo1 from "../Images/logo1.svg";
import { Link } from "react-scroll";
import { HamburgerMenuFun } from "./HamburgerMenu";

export const Navbar = () => {
  const links = [
    {
      to: "main_about_link",
      title: "About",
    },
    {
      to: "main_skill_link",
      title: "Skills",
    },
    {
      to: "main_projects_link",
      title: "Projects",
    },
    {
      to: "main_resume_link",
      title: "Resume",
    },
    {
      to: "main_footer_link",
      title: "Contact",
    },
  ];

  return (
    <NavbarMainDiv id="nav-menu">
      <NavbarDiv>
        <NavbarDiv className="nav-link home">
          <NavbarLi>
            <Link
              activeClassName="nav-link-active"
              className="nav-not-active-link"
              to="main_about_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              <img src={logo1} alt="" />
            </Link>
          </NavbarLi>
        </NavbarDiv>
        <NavbarDiv>
          <NavbarLi className="nav-link about">
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_about_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              About
            </Link>
          </NavbarLi>
          <NavbarLi className="nav-link skills">
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_skill_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Skills
            </Link>
          </NavbarLi>
          <NavbarLi className="nav-link projects">
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_projects_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Projects
            </Link>
          </NavbarLi>
          <NavbarLi className="nav-link resume">
            <a
              className="nav-not-active-link"
              target="_blank"
              href="https://drive.google.com/file/d/1X7UuBPTPS6vFaVoeeuZB2jd0NwME2PKW/view?usp=sharing"
            >
              Resume
            </a>
          </NavbarLi>
          <NavbarLi className="nav-link contact">
            <Link
              className="nav-not-active-link"
              activeClassName="nav-link-active"
              to="main_footer_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Contact
            </Link>
          </NavbarLi>
        </NavbarDiv>
        <NavbarHam>
          <HamburgerMenuFun />
        </NavbarHam>
      </NavbarDiv>
    </NavbarMainDiv>
  );
};
