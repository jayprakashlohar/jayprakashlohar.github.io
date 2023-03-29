import styled from "styled-components";
import DevIcon from "devicon-react-svg";

const StyledIcon_react = styled.i`
  font-size: 5em;
  transition: all 0.3s ease;

  &:hover {
    font-size: 4em;
  }

  @media (max-width: 760px) {
    & {
      font-size: 4em;
    }
  }
`;

const StyledIcon_react_small = styled(DevIcon)`
  width: 2em;
  fill: green;

  @media (max-width: 760px) {
    & {
    }
  }
`;

const Icon_small = styled.i`
  font-size: 2em;

  & :hover {
    /* transform: scale(1.3); */
    font-size: 3em;
  }
`;

export { StyledIcon_react, StyledIcon_react_small, Icon_small };
