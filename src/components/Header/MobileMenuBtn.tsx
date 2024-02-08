import styled, { css } from "styled-components";

type MobileMenuBtnProps = {
  isOpen: boolean;
  onToggle: () => void;
};

type StyledMobileMenuBtnProps = {
  $isOpen: boolean;
};

export const MobileMenuBtn = ({ isOpen, onToggle }: MobileMenuBtnProps) => {
  return (
    <StyledMobileMenuBtn $isOpen={isOpen} onClick={onToggle}>
      <span></span>
      <span></span>
      <span></span>
    </StyledMobileMenuBtn>
  );
};

const StyledMobileMenuBtn = styled.button<StyledMobileMenuBtnProps>`
  border: none;
  background-color: transparent;
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 100;
  display: none;

  ${(props) =>
    props.$isOpen &&
    css`
      & span:first-child {
        rotate: 45deg;
        translate: 0 14px;
      }

      & span:nth-child(2) {
        opacity: 0;
      }

      & span:last-child {
        rotate: -45deg;
        translate: 0 -14px;
      }
    `}

  @media screen and (max-width: 56.25em) {
    display: flex;
  }

  span {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #000;
    transition: all 0.35s;

    &:nth-child(2) {
      margin: auto;
    }
  }
`;
