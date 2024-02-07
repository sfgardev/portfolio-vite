import styled from "styled-components";
import { Container } from "../styled/Container";
import { FlexWrapper } from "../styled/FlexWrapper";
import { Icon } from "../Icon/Icon";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Navigation } from "../Navigation/Navigation";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper $align="center" $gap="6rem">
          <Icon iconId="logo-footer" width="97" height="59" />
          <FooterLinks>
            <FooterLink href="tel:911234509876">+91 12345 09876</FooterLink>
            <FooterLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</FooterLink>
          </FooterLinks>
          <SocialIcons fill="#42446E" $hover='#474b97' />
        </FlexWrapper>
        <FooterDivider />
        <FlexWrapper $justify="space-between" $align="center">
          <Navigation
            $fontSize="1.125"
            $color="#42446E"
            $fontWeight="400"
            $lineHeight="1.44"
          />
          <FooterCopyright>
            Designed and built by <span>Pavan MG</span> with <span>Love</span> &{" "}
            <span>Coffee</span>
          </FooterCopyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 12.5rem 0 3.75rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 3rem;
  margin-left: auto;
`;

const FooterLink = styled.a`
  font-family: "DM Sans", sans-serif;
  color: #42446e;
`;

const FooterDivider = styled.div`
  width: 100%;
  border-bottom: 2px solid #bcbbbb;
  margin: 2.5rem 0 2.8125rem;
`;

const FooterCopyright = styled.p`
  span {
    background-image: linear-gradient(to right, #7352d7, #9d5288);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & + span {
      background-image: linear-gradient(to right, #8e0794, #ad4790);
    }

    &:last-child {
      background-image: linear-gradient(to right, #ec42ce, #f54ac5);
    }
  }
`;
