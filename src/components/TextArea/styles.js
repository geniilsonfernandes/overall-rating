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
export const Input = styled.textarea`
  ${({ theme }) => css`
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
  `}
`;
