import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Container } from "../styled/Container";
import { FlexWrapper } from "../styled/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper>
          <Logo />
          <HeaderWrapper>
            <Navigation />
            <SocialIcons />
          </HeaderWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding-top: 2.56rem;
`;

const HeaderWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 3.19rem;
  padding-top: 0.5rem;
`;
