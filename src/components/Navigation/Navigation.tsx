import styled, { css } from "styled-components";

type NavigationProps = {
  $color: string;
  $fontSize: string;
  $fontWeight: string;
  $lineHeight: string;
  isOpen?: boolean;
};

type StyledNavigationProps = {
  $isOpen?: boolean;
};

const navLinks = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Navigation = ({
  $color,
  $fontSize,
  $fontWeight,
  $lineHeight,
  isOpen,
}: NavigationProps) => {
  return (
    <StyledNavigation $isOpen={isOpen}>
      <NavigationList>
        {navLinks.map((link) => (
          <NavigationItem key={link}>
            <NavigationLink
              href="#"
              $color={$color}
              $fontSize={$fontSize}
              $fontWeight={$fontWeight}
              $lineHeight={$lineHeight}
            >
              {link}
            </NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav<StyledNavigationProps>`
  @media screen and (max-width: 56.25em) {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.9);
    translate: 100%;
    transition: all 0.5s ease-in;
    opacity: 0;
    visibility: hidden;

    ${(props) =>
      props.$isOpen &&
      css`
        opacity: 1;
        visibility: visible;
        translate: 0;
      `}
  }
`;

const NavigationList = styled.ul`
  display: flex;
  gap: 3.25rem;

  @media screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const NavigationItem = styled.li``;

const NavigationLink = styled.a<NavigationProps>`
  font-family: "DM Sans", sans-serif;
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  line-height: ${(props) => props.$lineHeight};
  position: relative;

  @media screen and (max-width: 56.25em) {
    font-size: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(to left, #e70faa, #00c0fd);
    height: 4px;
    left: -2px;
    right: -2px;
    bottom: -4px;
    scale: 0;
    transition: all 0.35s;
  }

  &:hover {
    background-image: linear-gradient(to right, #13b0f5, #8d6ec1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      scale: 1;
    }
  }
`;
