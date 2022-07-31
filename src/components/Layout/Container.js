import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1216px;
    margin: 0 auto;
    @media (max-width: ${theme.media.mobile}) {
      max-width: 610px;
      margin: 0 auto;
    }
  `}
`;
