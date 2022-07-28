import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
  `}
`;
export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 2.8rem;
    height: 2.8rem;
    border: 2px solid ${theme.colors.black[100]};
    border-radius: 50%;
    background: transparent;
    transition: background ease-in-out 200ms;
    outline: none;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.black[500]};
    }
    &:before {
      content: "";
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: ${theme.colors.black[500]};
      transition: opacity ease-in-out 200ms;
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;
