import styled from "styled-components";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Badge } from "../../components/styled/Badge";

type ExperienceCardProps = {
  position: string;
  place: string;
  city?: string;
  badgeTitle: string;
  date: string;
};

export const ExperienceCard = ({
  badgeTitle,
  city,
  date,
  place,
  position,
}: ExperienceCardProps) => {
  return (
    <StyledExperienceCard>
      <FlexWrapper $justify="space-between">
        <ExperienceCardLeft>
          <ExperienceCardPosition>{position}</ExperienceCardPosition>
          <FlexWrapper $gap="3rem">
            <ExperienceCardPlace>{place}</ExperienceCardPlace>
            {city && <ExperienceCardCity>{city}</ExperienceCardCity>}
          </FlexWrapper>
        </ExperienceCardLeft>
        <ExperienceCardRight>
          <Badge>{badgeTitle}</Badge>
          <ExperienceCardDate>{date}</ExperienceCardDate>
        </ExperienceCardRight>
      </FlexWrapper>
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled.article`
  border-bottom: 2px solid #ebeaed;
  padding-bottom: 1.5rem;

  span {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 2.33;
    color: #a7a7a7;
  }
`;

const ExperienceCardLeft = styled.div``;

const ExperienceCardRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.075rem;

  & > div {
    align-self: flex-end;
  }
`;

const ExperienceCardPosition = styled.h4`
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
`;

const ExperienceCardPlace = styled.span``;

const ExperienceCardCity = styled.span``;

const ExperienceCardDate = styled.span``;
