import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
    @media (max-width: ${theme.media.mobile}) {
      max-width: 610px;
      margin: 0 auto;
    }
  `}
`;
