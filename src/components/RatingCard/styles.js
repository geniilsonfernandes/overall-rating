import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 32px 48px;
    box-shadow: 0px 4px 139px rgba(228, 228, 228, 0.4);
    @media (max-width: ${theme.media.mobile}) {
      padding: 32px 16px;
    }
  `}
`;

export const Head = styled.div`
  ${() => css`
    display: flex;
    gap: 16px;
    align-items: center;
  `}
`;
export const HeadGroup = styled.div`
  display: flex;
  gap: 16px;
`;
export const HeadItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
  `}
`;

export const HeadDate = styled.span`
  ${({ theme }) => css`
    flex: 1;
    text-align: right;
    display: block;
    font-weight: 400;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
    opacity: 0.5;
  `}
`;

export const Content = styled.div`
  padding: 16px 0;
`;
export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.black[500]};
  `}
`;
export const Review = styled.div`
  ${({ theme }) => css`
    font-weight: 400;
    padding-top: 8px;
    font-size: ${theme.fontSizes.medium};
    line-height: 2.4rem;
    color: ${theme.colors.black[500]};
  `}
`;
