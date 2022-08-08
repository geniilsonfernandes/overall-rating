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
export const Error = styled.span`
  ${({ theme }) => css`
    margin-top: 8px;
    display: block;
    font-weight: 400;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.red[100]};
  `}
`;

const InputModifiers = {
  error: (theme) => css`
    border: 2px solid ${theme.colors.red[100]};
  `
};

export const Input = styled.input`
  ${({ theme, isError }) => css`
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
    ${isError && InputModifiers.error(theme)}
  `}
`;
