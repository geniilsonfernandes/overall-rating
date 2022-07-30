import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Photo = styled.img`
  ${({ theme }) => css`
    width: 116px;
    height: 116px;
    border-radius: 58px;
    background: #e2e2e2;
    border: 8px solid ${theme.colors.white[100]};
  `}
`;
export const Content = styled.div``;
export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.black[500]};
  `}
`;
export const Excerpt = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: 400;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.black[500]};
    opacity: 0.5;
  `}
`;
