import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Container } from "../styled/Container";
import { FlexWrapper } from "../styled/FlexWrapper";
import { MobileMenuBtn } from "./MobileMenuBtn";
import { useEffect, useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const Header = () => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const width = useWindowWidth();
  const isMobile = width <= 900;

  const toggle = () => {
    setIsMobileNavOpened((opened) => !opened);
  };

  useEffect(() => {
    if (!isMobile) return;

    if (isMobileNavOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isMobileNavOpened, isMobile]);

  return (
    <StyledHeader id="Home">
      <Container>
        <FlexWrapper>
          <Logo />
          <HeaderWrapper>
            <Navigation
              $fontSize="1.25rem"
              $color="#666"
              $fontWeight="500"
              $lineHeight="1.3"
              isOpen={isMobileNavOpened}
              onToggle={toggle}
            />
            {!isMobile && <SocialIcons fill="#666" $hover="#4c4b4b" />}
            <MobileMenuBtn isOpen={isMobileNavOpened} onToggle={toggle} />
          </HeaderWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 2.56rem;
  position: relative;
`;

const HeaderWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 3.19rem;
  padding-top: 0.5rem;

  @media screen and (max-width: 56.25em) {
    padding-top: 0;
  }
`;
