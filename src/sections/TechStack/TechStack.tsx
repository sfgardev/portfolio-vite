import styled from "styled-components";
import { Container } from "../../components/styled/Container";
import { SectionTitle } from "../../components/styled/SectionTitle";
import { SubTitle } from "../../components/styled/SubTitle";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";

const techIcons = [
  "html",
  "css",
  "js",
  "react",
  "redux",
  "bootstrap",
  "tailwind",
  "sass",
  "git",
  "greensock",
  "vs-code",
  "github-tech",
];

export const TechStack = () => {
  return (
    <StyledTechStack id="Tech Stack">
      <Container>
        <FlexWrapper $direction="column" $gap="2rem" $mb="7rem">
          <SectionTitle $textAlign="center">My Tech Stack</SectionTitle>
          <SubTitle $textAlign="center">
            Technologies I’ve been working with recently
          </SubTitle>
        </FlexWrapper>
        <FlexWrapper $justify="center" $gap="5.9rem" $wrap="wrap">
          {techIcons.map((icon) => (
            <Icon key={icon} iconId={icon} width="120" height="120" />
          ))}
        </FlexWrapper>
      </Container>
    </StyledTechStack>
  );
};

const StyledTechStack = styled.section`
  padding-top: 12.5rem;
  scroll-margin-top: -12rem;

  @media screen and (max-width: 56.25em) {
    padding-top: 7rem;
    scroll-margin-top: -6rem;

    ${Container} ${FlexWrapper} {
      margin-bottom: 3rem;
      gap: 1.25rem;
    }
  }

  svg {
    transition: all 0.35s;

    @media screen and (max-width: 56.25em) {
      width: 100px;
      height: 100px;
    }

    &:hover {
      scale: 1.1;
    }
  }
`;
