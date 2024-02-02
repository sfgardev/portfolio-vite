import styled, { CSSProperties } from "styled-components";

type FlexWrapperProps = {
  $direction?: CSSProperties["flexDirection"];
  $align?: CSSProperties["alignItems"];
  $justify?: CSSProperties["justifyContent"];
  $gap?: CSSProperties["gap"];
  $wrap?: CSSProperties["flexWrap"];
  $maxWidth?: CSSProperties["width"];
  $mb?: CSSProperties["marginBottom"];
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  gap: ${(props) => props.$gap};
  flex-wrap: ${(props) => props.$wrap};
  max-width: ${(props) => props.$maxWidth};
  margin-bottom: ${(props) => props.$mb};
`;
