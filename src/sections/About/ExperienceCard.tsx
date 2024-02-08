import styled from "styled-components";
import { FlexWrapper } from "../../components/styled/FlexWrapper";
import { Badge } from "../../components/styled/Badge";
import { Icon } from "../../components/Icon/Icon";

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
            <FlexWrapper $align="center" $gap=".25rem">
              <Icon iconId="office" width="16" height="12" fill="#a7a7a7" />
              <ExperienceCardPlace>{place}</ExperienceCardPlace>
            </FlexWrapper>
            {city && (
              <FlexWrapper $align="center" $gap=".125rem">
                <Icon iconId="location" width="16" height="12" fill="#a7a7a7" />
                <ExperienceCardCity>{city}</ExperienceCardCity>
              </FlexWrapper>
            )}
          </FlexWrapper>
        </ExperienceCardLeft>
        <ExperienceCardRight>
          <Badge>{badgeTitle}</Badge>
          <FlexWrapper $align="center" $gap=".125rem">
            <Icon iconId="calendar" width="16" height="12" fill="#a7a7a7" />
            <ExperienceCardDate>{date}</ExperienceCardDate>
          </FlexWrapper>
        </ExperienceCardRight>
      </FlexWrapper>
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled.article`
  border-bottom: 2px solid #ebeaed;
  padding-bottom: 1.5rem;

  & > ${FlexWrapper} {
    @media screen and (max-width: 28.75em) {
      flex-direction: column;

      gap: 0.5rem;
    }
  }

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

  @media screen and (max-width: 28.75em) {
    flex-direction: row;
  }

  & > div {
    align-self: flex-end;

    @media screen and (max-width: 28.75em) {
      align-self: start;
    }
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
