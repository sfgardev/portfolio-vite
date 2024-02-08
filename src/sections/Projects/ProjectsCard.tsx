import styled from "styled-components";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";

type ProjectsCardProps = {
  jpegUrl: string;
  webpUrl: string;
};

export const ProjectsCard = ({ jpegUrl, webpUrl }: ProjectsCardProps) => {
  return (
    <StyledProjectsCard>
      <ProjectsCardImageWrapper>
        <picture>
          <source srcSet={webpUrl} type="image/webp" />
          <source srcSet={jpegUrl} type="image/jpeg" />
          <ProjectsCardImage src={jpegUrl} alt="Project HTML CSS REACT" />
        </picture>
      </ProjectsCardImageWrapper>

      <ProjectsCardContent>
        <ProjectsCardTitle>Project Tile goes here</ProjectsCardTitle>
        <ProjectsCardText>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </ProjectsCardText>
        <ProjectsCardInfo>
          <span>Tech stack</span>: HTML , JavaScript, SASS, React
        </ProjectsCardInfo>
        <FlexWrapper $justify="space-between" $align="center">
          <ProjectsCardLink href="https://github.com">
            <Icon iconId="chain" width="20" height="20" fill="currentColor" />
            Live Preview
          </ProjectsCardLink>

          <ProjectsCardLink href="https://github.com">
            <Icon
              iconId="github-projects"
              width="20"
              height="20"
              fill="currentColor"
            />
            View Code
          </ProjectsCardLink>
        </FlexWrapper>
      </ProjectsCardContent>
    </StyledProjectsCard>
  );
};

const ProjectsCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.35s;
`;

const StyledProjectsCard = styled.article`
  width: 31.4%;
  flex: 1 1 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media screen and (max-width: 43.125em) {
    flex: 0 1 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 28.75em) {
    flex-basis: 100%;
  }

  &:hover {
    ${ProjectsCardImage} {
      scale: 1.15;
    }
  }
`;

const ProjectsCardImageWrapper = styled.div`
  height: 16.25rem;
  overflow: hidden;

  @media screen and (max-width: 43.125em) {
    height: 18rem;
  }

  @media screen and (max-width: 28.75em) {
    height: 16.25rem;
  }
`;

const ProjectsCardContent = styled.div`
  padding: 1.6875rem 2rem 1.5625rem 1.8125rem;
`;

const ProjectsCardTitle = styled.h4`
  color: #000;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1rem;
`;

const ProjectsCardText = styled.p`
  font-weight: 300;
  margin-bottom: 0.75rem;
`;

const ProjectsCardInfo = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 1.25rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const ProjectsCardLink = styled.a`
  font-size: 1rem;
  line-height: 1.6;
  color: #000;
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.35s;

  &:hover {
    color: #716e6e;
  }
`;
