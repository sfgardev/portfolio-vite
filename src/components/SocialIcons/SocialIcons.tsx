import styled from "styled-components";
import { Icon } from "../Icon/Icon";

const socialIcons = ["github", "twitter", "linkedin"];

type SocialIconsProps = {
  fill?: string;
  $hover?: string;
};

export const SocialIcons = ({ fill, $hover }: SocialIconsProps) => {
  return (
    <StyledSocialIcons>
      {socialIcons.map((icon) => (
        <Link key={icon} href={`https://${icon}.com`} $hover={$hover}>
          <Icon width="30px" height="30px" iconId={icon} fill={fill} />
        </Link>
      ))}
    </StyledSocialIcons>
  );
};

const StyledSocialIcons = styled.div<SocialIconsProps>`
  display: flex;
  gap: 1.25rem;
`;

const Link = styled.a<SocialIconsProps>`
  align-self: flex-start;
  transition: all 0.35s;

  svg {
    transition: all 0.35s;
  }

  &:hover {
    translate: 0 -2px;

    svg {
      fill: ${(props) => props.$hover};
    }
  }
`;
