import styled from "styled-components";
import { Container } from "../../components/styled/Container";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { SectionTitle } from "../../components/styled/SectionTitle";
import { SubTitle } from "../../components/styled/SubTitle";
import { ProjectsCard } from "./ProjectsCard";

import project1Jpeg from "../../assets/images/projects/project-1.jpeg";
import project1Webp from "../../assets/images/projects/project-1.webp";
import project2Jpeg from "../../assets/images/projects/project-2.jpeg";
import project2Webp from "../../assets/images/projects/project-2.webp";
import project3Jpeg from "../../assets/images/projects/project-3.jpeg";
import project3Webp from "../../assets/images/projects/project-3.webp";
import project4Jpeg from "../../assets/images/projects/project-4.jpeg";
import project4Webp from "../../assets/images/projects/project-4.webp";
import project5Jpeg from "../../assets/images/projects/project-5.jpeg";
import project5Webp from "../../assets/images/projects/project-5.webp";
import project6Jpeg from "../../assets/images/projects/project-6.jpeg";
import project6Webp from "../../assets/images/projects/project-6.webp";

const projectItems = [
  {
    jpegImg: project1Jpeg,
    webpImg: project1Webp,
  },
  {
    jpegImg: project2Jpeg,
    webpImg: project2Webp,
  },
  {
    jpegImg: project3Jpeg,
    webpImg: project3Webp,
  },
  {
    jpegImg: project4Jpeg,
    webpImg: project4Webp,
  },
  {
    jpegImg: project5Jpeg,
    webpImg: project5Webp,
  },
  {
    jpegImg: project6Jpeg,
    webpImg: project6Webp,
  },
];

export const Projects = () => {
  return (
    <StyledProjects id="Projects">
      <Container>
        <FlexWrapper $direction="column" $gap="2rem" $mb="7rem">
          <SectionTitle $textAlign="center">Projects</SectionTitle>
          <SubTitle $textAlign="center">Things I’ve built so far</SubTitle>
        </FlexWrapper>
        <FlexWrapper $gap="4rem 2.125rem" $wrap="wrap">
          {projectItems.map((item, index) => (
            <ProjectsCard
              key={index}
              webpUrl={item.webpImg}
              jpegUrl={item.jpegImg}
            />
          ))}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding-top: 12.5rem;
  scroll-margin-top: -12rem;

  @media screen and (max-width: 56.25em) {
    padding-top: 5rem;
    scroll-margin-top: -4rem;

    ${Container} ${FlexWrapper}:first-child {
      margin-bottom: 3rem;
      gap: 1.25rem;
    }
  }
`;
