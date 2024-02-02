import styled, { CSSProperties } from "styled-components";

type SectionTitleProps = {
  $textAlign?: CSSProperties["textAlign"];
};

export const SectionTitle = styled.h2<SectionTitleProps>`
  font-size: 2.625rem;
  line-height: 1.23;
  color: #42446e;
  text-align: ${(props) => props.$textAlign};
`;
