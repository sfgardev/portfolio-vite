import styled, { CSSProperties } from "styled-components";

type FlexWrapperProps = {
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: CSSProperties["flexWrap"];
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
`;
