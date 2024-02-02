import styled from "styled-components";
import { LogoIcon } from "./LogoIcon";

export const Logo = () => {
  return (
    <StyledLogo href="#">
      <LogoIcon />
    </StyledLogo>
  );
};

const StyledLogo = styled.a``;
