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
          <FooterLogoLink href="#">
            <Icon
              iconId="logo-footer"
              width="97"
              height="59"
              fill="currentColor"
            />
          </FooterLogoLink>
          <FooterLinks>
            <FooterLink href="tel:911234509876">+91 12345 09876</FooterLink>
            <FooterLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</FooterLink>
          </FooterLinks>
          <SocialIcons fill="#42446E" $hover="#474b97" />
        </FlexWrapper>
        <FooterDivider />
        <FlexWrapper
          $justify="space-between"
          $align="center"
          $gap={"1rem"}
          $wrap="wrap"
        >
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

  @media screen and (max-width: 43.125em) {
    padding: 7rem 0 2rem;

    ${Container} ${FlexWrapper}:first-child {
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    nav {
      display: none;
    }
  }
`;

const FooterLogoLink = styled.a`
  color: #42446e;
  transition: all 0.35s;

  &:hover {
    color: #474b97;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 3rem;
  margin-left: auto;

  @media screen and (max-width: 43.125em) {
    margin-left: 0;
  }
`;

const FooterLink = styled.a`
  font-family: "DM Sans", sans-serif;
  color: #42446e;
  transition: all 0.35s;

  &:hover {
    color: #474b97;
  }
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
