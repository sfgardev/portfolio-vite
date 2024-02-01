import styled from "styled-components";
import { Container } from "../../components/styled/Container";
import { SectionTitle } from "../../components/styled/SectionTitle";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { ExperienceCard } from "./ExperienceCard";

const workExperienceItems = [
  {
    position: "Junior Web Developer",
    place: "Dr. Rajkumar’s Learning App",
    city: "Bengaluru",
    badgeTitle: "Full Time",
    date: "Sep 2021 - Dec 2021",
  },

  {
    position: "Web Development Intern",
    place: "IonPixelz Web Solutions",
    city: "Bengaluru",
    badgeTitle: "Internship",
    date: "Sep 2021 - Dec 2021",
  },

  {
    position: "SEO / SEM Specialist",
    place: "HAAPS",
    city: "Bengaluru",
    badgeTitle: "Internship",
    date: "Sep 2021 - Dec 2021",
  },
];

const educationExperienceItem = {
  position: "Bachelor in Electronics & Communication",
  place: "Bangalore Instutute of Technology",
  badgeTitle: "Full Time",
  date: "Aug 2015 - Dec 2020",
};

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper $direction="column" $gap="2.375rem" $maxWidth="44.375rem">
          <SectionTitle>About Me</SectionTitle>
          <AboutText>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </AboutText>
          <AboutExperience>
            <SectionTitle as="h3">Work Experience</SectionTitle>
            {workExperienceItems.map((item) => (
              <ExperienceCard
                position={item.position}
                place={item.place}
                city={item.city}
                badgeTitle={item.badgeTitle}
                date={item.date}
              />
            ))}
          </AboutExperience>
          <AboutEducation>
            <SectionTitle as="h3">Education</SectionTitle>
            <ExperienceCard
              position={educationExperienceItem.position}
              place={educationExperienceItem.place}
              badgeTitle={educationExperienceItem.badgeTitle}
              date={educationExperienceItem.date}
            />
          </AboutEducation>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding-top: 11.375rem;
`;

const AboutText = styled.p``;

const AboutExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
`;

const AboutEducation = styled(AboutExperience)``;
