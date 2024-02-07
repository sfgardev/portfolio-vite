import styled from "styled-components";
import { LogoIcon } from "./LogoIcon";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <LogoIcon />
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  transition: all 0.35s;

  &:hover {
    filter: brightness(0.7);
    opacity: 0.8;
  }
`;
