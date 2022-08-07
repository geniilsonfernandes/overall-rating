import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
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
    height: 56px;
    border: 2px solid ${theme.colors.black[100]};
    border-radius: ${theme.radius + 2}px;
    padding: 16px;
    font-weight: 500;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.black[500]};
    transition: border ease-in-out 200ms;
    width: 100%;
    ::placeholder {
      color: ${theme.colors.black[500]};
      opacity: 0.5;
    }
    :focus {
      outline: none;
      border: 2px solid ${theme.colors.black[500]};
    }
  `}
`;
