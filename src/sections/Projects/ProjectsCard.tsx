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
      <picture>
        <source srcSet={webpUrl} type="image/webp" />
        <source srcSet={jpegUrl} type="image/jpeg" />
        <ProjectsCardImage src={jpegUrl} alt="Project HTML CSS REACT" />
      </picture>

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
            <Icon iconId="chain" width="20" height="20" fill="#000" />
            Live Preview
          </ProjectsCardLink>

          <ProjectsCardLink href="https://github.com">
            <Icon iconId="github-projects" width="20" height="20" fill="#000" />
            View Code
          </ProjectsCardLink>
        </FlexWrapper>
      </ProjectsCardContent>
    </StyledProjectsCard>
  );
};

const StyledProjectsCard = styled.article`
  width: 31.4%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ProjectsCardImage = styled.img`
  width: 100%;
  height: 16.25rem;
  object-fit: cover;
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
`;
