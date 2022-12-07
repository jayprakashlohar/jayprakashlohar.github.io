import gsap from "gsap";
import React, { useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";
import { MobileOptionsMainDiv } from "../Styled/NavbarDiv";
import { Link } from "react-scroll";

const MiniNavbar = styled.div`
    & > .miniNavbar_div {
        height: 98vh;
        width: 100vw;
        background: black;
        position: fixed;
        top: 5em;
        left: 0;
        /* padding-top: 2vh; */
    }
`;

export const HamburgerMenuFun = () => {
    const [menuState, setMenuState] = useState(false);
    const [nav, setNav] = useState(gsap.timeline());

    useEffect(() => {
        gsap.set(".miniNavbar_div", { xPercent: 100 });
        nav.pause();
        setNav(
            nav.to(".miniNavbar_div", {
                xPercent: 0,
                duration: 1,
                ease: "Power1.out",
            })
        );
    }, []);

    useEffect(() => {
        menuState ? nav.play() : nav.reverse();
    }, [menuState]);

    const handleClick = () => {
        console.log("menuState:", menuState);
        setMenuState(!menuState);
    };

    return (
        <div>
            <HamburgerMenu
                isOpen={menuState}
                menuClicked={handleClick}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color="white"
                borderRadius={0}
                animationDuration={0.5}
            />
            <MiniNavbar>
                <div className="miniNavbar_div">
                    <MobileOptionsMainDiv>
                        <ul>
                            <li>
                                {" "}
                                <Link
                                    onClick={handleClick}
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
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
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
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
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
                            </li>
                            <li>
                                <a
                                    onClick={handleClick}
                                    className="nav-not-active-link"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1LHqVM01wZ7gXaPsG0kV5aXDCj7x2AL3Y/view?usp=sharing"
                                >
                                    Resume
                                </a>
                            </li>
                            <li>
                                <Link
                                    onClick={handleClick}
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
                            </li>
                        </ul>
                    </MobileOptionsMainDiv>
                </div>{" "}
            </MiniNavbar>
        </div>
    );
};
