import styled, { css } from "styled-components";
import { Container } from "../../components/Layout";

const headPadding = 56;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background: #ffc90f;
    padding: ${headPadding * 2}px 0;
    @media (max-width: ${theme.media.mobile}) {
      padding: ${headPadding}px 0;
    }
  `}
`;

export const Head = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    @media (max-width: ${theme.media.mobile}) {
      text-align: center;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  `}
`;

export const SectionContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: 16px 16px 0 0;
    margin-top: -16px;
    padding-bottom: 32px;
  `}
`;
export const Section = styled(Container)`
  ${({ theme }) => css`
    padding-top: 32px;
    padding-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background: ${theme.colors.background};
    top: 0;
    z-index: 1;
    ::after {
      content: "";
      width: calc(100% - 32px);
      height: 1px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: ${theme.colors.black[500]};
    }
  `}
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    padding-top: 8px;
    font-size: ${theme.fontSizes.medium};
    line-height: 2.4rem;
    color: ${theme.colors.black[500]};
  `}
`;

export const SectionReview = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding-top: 32px;
`;
