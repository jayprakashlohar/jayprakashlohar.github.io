import styled from "styled-components";

const NavbarMainDiv = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    height: 5em;
    text-decoration: none;
    color: white;
    background-color: black;
    z-index: 2;

    @media (max-width: 760px) {
        & {
            
        }
    }
`;

const NavbarDiv = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: auto;
    height: 60px;
    color: white;
    ul:first-child {
        width: 70%;
    }

    @media (max-width: 760px) {
        &:nth-child(2) {
            display: none;
        }
        & ul:first-child {
            width: 97%;
        }
    }
`;

const NavbarHam = styled.div`
    display: none;
    @media (max-width: 760px) {
        & {
            display: block;
            color: white;
            margin-top: 5px;
        }
    }
`;

const NavbarLi = styled.li`
    list-style: none;
    color: white;
    background-color: black;
    text-decoration: none !important;
`;

const NavHamburgerUpperDiv = styled.div`
    & div {
        overflow: hidden;
    }
`;

const EveryHeading = styled.h1`
    margin: 3em auto 1em;
    color: #444649;
    font-size: 3em;
`;
const EveryHeading2 = styled.h2`
    margin: 1em auto;
    color: #4e5053;

    @media (max-width: 760px) {
        & {
            font-size: 1em;
        }
    }
`;

const MobileOptionsMainDiv = styled.div`
    color: #fff;
    min-height: 100vh;
    width: 80%;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.8);

    & li {
        list-style-type: none;
        font-size: 17px;
        line-height: 1.23536;
        font-weight: 400;
        letter-spacing: -0.022em;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
        padding-left: 5px;
    }

    & a {
        text-decoration: none;
        color: #fff;
        width: 100%;
    }
`;


export {
    NavbarDiv,
    NavbarLi,
    NavbarMainDiv,
    NavHamburgerUpperDiv,
    EveryHeading,
    EveryHeading2,
    NavbarHam,
    MobileOptionsMainDiv,
};
