import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
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
`;

const HeroTitile = styled.h1`
  font-size: 3.625rem;
  line-height: 1.2;
  color: #42446e;

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
`;
