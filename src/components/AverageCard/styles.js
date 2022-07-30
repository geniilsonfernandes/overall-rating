import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 16px;
    max-width: 150px;
    background: ${theme.colors.white[100]};
    border-radius: 16px;
  `}
`;

export const Average = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.black[500]};
  `}
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    padding-top: 8px;
    text-align: center;
    display: block;
    font-weight: 400;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
  `}
`;
