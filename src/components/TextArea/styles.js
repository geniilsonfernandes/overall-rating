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

export const Input = styled.textarea`
  ${({ theme, isError }) => css`
    border: 2px solid ${theme.colors.black[100]};
    border-radius: ${theme.radius + 2}px;
    padding: 16px;
    font-weight: 500;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.black[500]};
    transition: border ease-in-out 200ms;
    width: 100%;
    resize: vertical;
    ::placeholder {
      color: ${theme.colors.black[500]};
      opacity: 0.5;
    }
    :focus {
      outline: none;
      border: 2px solid ${theme.colors.black[500]};
    }
     {
      overflow: auto;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      background-color: ${theme.colors.black[500]};
      border: 4px solid #fff;
    }

    @media (max-width: ${theme.media.mobile}) {
      min-height: 200px;
    }
    ${isError && InputModifiers.error(theme)}
  `}
`;
