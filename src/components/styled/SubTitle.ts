import styled, { CSSProperties } from "styled-components";

type SubTitleProps = {
  $textAlign?: CSSProperties["textAlign"];
};

export const SubTitle = styled.h3<SubTitleProps>`
  font-size: 2rem;
  line-height: 1;
  color: #666666;
  font-weight: 400;
  text-align: ${(props) => props.$textAlign};

  @media screen and (max-width: 43.125em) {
    font-size: 1.5rem;
    line-height: 1.2;
  }
`;
