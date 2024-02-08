import styled from "styled-components";
import { Container } from "../../components/styled/Container";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import pavanImageJpeg from "../../assets/images/pavan.jpeg";
import pavanImageWebp from "../../assets/images/pavan.webp";

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <FlexWrapper $justify="space-between" $align="center">
          <HeroTitile>
            Hi 👋,
            <br />
            My name is
            <br />
            <span>Pavan MG</span>
            <br />I build things for web
          </HeroTitile>
          <picture>
            <source srcSet={pavanImageWebp} type="image/webp" />
            <source srcSet={pavanImageJpeg} type="image/jpeg" />
            <HeroImage src={pavanImageJpeg} alt="Frontend developer Pavan MG" />
          </picture>
        </FlexWrapper>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  padding-top: 14.94rem;

  @media screen and (max-width: 56.25em) {
    padding-top: 4rem;
  }

  ${FlexWrapper} {
    @media screen and (max-width: 43.125em) {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

const HeroTitile = styled.h1`
  font-size: 3.625rem;
  line-height: 1.2;
  color: #42446e;

  @media screen and (max-width: 56.25em) {
    font-size: 3rem;
  }

  @media screen and (max-width: 43.125em) {
    /* font-size: 2rem; */
    text-align: center;
  }

  span {
    background-image: linear-gradient(to right, #13b0f5, #8d6ec1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroImage = styled.img`
  background-image: linear-gradient(to bottom right, #e70faa, #00c0fd);
  padding: 9px;
  width: 21.75rem;
  height: 21.75rem;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.35s;

  &:hover {
    translate: 0 -15px;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  }
`;
