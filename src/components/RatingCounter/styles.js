import styled, { css } from "styled-components";

export const Rating = styled.div``;
export const Labe2 = styled.h2`
  ${({ theme }) => css`
    display: block;
    font-weight: 600;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.black[500]};
  `}
`;
export const RatingGrid = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px 0;
`;
export const GridItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 5px 5px 4px;
    background: ${theme.colors.white[100]};
    border: 3px solid ${theme.colors.black[100]};
    border-radius: 6px;
    cursor: pointer;
  `}
`;
export const Helper = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: 400;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
  `}
`;
