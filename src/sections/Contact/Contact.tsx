import styled from "styled-components";
import { Container } from "../../components/styled/Container";

export const Contact = () => {
  return (
    <StyledContact id="Contact">
      <Container>
        <ContactTitle>
          For any questions please mail me:{" "}
          <ContactLink>hi@pavanmg.in</ContactLink>
        </ContactTitle>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  padding-top: 11.5rem;

  @media screen and (max-width: 56.25em) {
    padding-top: 7rem;
  }
`;

const ContactTitle = styled.h2`
  max-width: 57.0625rem;
  font-family: "DM Sans", sans-serif;
  font-size: 3.625rem;
  color: #1e0e62;
  letter-spacing: -1px;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 28.75em) {
    font-size: 3rem;
  }
`;

const ContactLink = styled.a.attrs(() => ({
  href: "mailto:hi@pavanmg.in",
}))`
  display: inline-block;
  background-image: linear-gradient(to right, #13b0f5, #e70faa);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.35s;

  &:hover {
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
    scale: 1.05;
  }
`;
