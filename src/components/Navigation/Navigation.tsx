import styled from "styled-components";

export const Navigation = () => {
  const navLinks = ["Home", "About", "Tech Stack", "Projects", "Contact"];

  return (
    <StyledNavigation>
      <NavigationList>
        {navLinks.map((link) => (
          <NavigationItem key={link}>
            <NavigationLink href="#">{link}</NavigationLink>
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

const NavigationLink = styled.a`
  font-family: "DM Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;
`;
