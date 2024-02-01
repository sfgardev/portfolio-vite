import styled from "styled-components";
import { Icon } from "../Icon/Icon";

const socialIcons = ["github", "twitter", "linkedin"];

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      {socialIcons.map((icon) => (
        <a key={icon} href={`https://${icon}.com`}>
          <Icon width="30px" height="30px" iconId={icon} />
        </a>
      ))}
    </StyledSocialIcons>
  );
};

const StyledSocialIcons = styled.div`
  display: flex;
  gap: 1.25rem;
`;