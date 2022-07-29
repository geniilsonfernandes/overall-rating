import styled, { css } from "styled-components";

const WrapperModifier = {
  loading: (theme) => css`
    pointer-events: none;
    cursor: not-allowed;
    background: ${theme.colors.black[500]};
    opacity: 0.7;
  `
};

const Button = styled.button`
  ${({ theme, isLoading }) => css`
    background: ${theme.colors.black[500]};
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.white[100]};
    padding: 16px;
    border-radius: ${theme.radius}px;
    transition: background ease-in-out 200ms;
    transition: box-shadow ease-in-out 100ms;
    border: none;
    box-shadow: 0px 0px 0px 0px ${theme.colors.black[100]};
    :hover {
      background: ${theme.colors.black[400]};
    }
    :focus {
      outline: none;
      box-shadow: 0px 0px 0px 5px ${theme.colors.black[100]};
    }
    ${isLoading && WrapperModifier.loading(theme)}
  `}
`;

export default Button;
