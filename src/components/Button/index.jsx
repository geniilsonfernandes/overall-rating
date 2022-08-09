import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.black[500]};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.white[100]};
    padding: 16px;
    letter-spacing: 0.12rem;
    border-radius: ${theme.radius}px;
    transition: background ease-in-out 200ms;
    transition: box-shadow ease-in-out 100ms;
    border: none;
    box-shadow: 0px 0px 0px 0px ${theme.colors.black[100]};
    :hover {
      background: ${theme.colors.black[400]};
    }
    :disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    :focus {
      outline: none;
      box-shadow: 0px 0px 0px 5px ${theme.colors.black[200]};
    }
  `}
`;

export default Button;
