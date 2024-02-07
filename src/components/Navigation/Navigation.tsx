import styled from "styled-components";

type NavigationProps = {
  $color: string;
  $fontSize: string;
  $fontWeight: string;
  $lineHeight: string;
};

const navLinks = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Navigation = ({
  $color,
  $fontSize,
  $fontWeight,
  $lineHeight,
}: NavigationProps) => {
  return (
    <StyledNavigation>
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

const StyledNavigation = styled.nav``;

const NavigationList = styled.ul`
  display: flex;
  gap: 3.25rem;
`;

const NavigationItem = styled.li``;

const NavigationLink = styled.a<NavigationProps>`
  font-family: "DM Sans", sans-serif;
  color: ${(props) => props.$color};
  /* font-size: 1.25rem; */
  font-size: ${(props) => props.$fontSize};
  /* font-weight: 500; */
  font-weight: ${(props) => props.$fontWeight};
  /* line-height: 1.3; */
  line-height: ${(props) => props.$lineHeight};
  position: relative;

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
