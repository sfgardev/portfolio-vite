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
`;
