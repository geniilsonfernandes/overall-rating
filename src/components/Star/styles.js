import styled, { css } from "styled-components";

const wrapperModifier = {
  active: () => css`
    stroke: #ffb444;
    fill: #ffec8a;
  `
};

export const Wrapper = styled.svg`
  ${({ active }) => css`
    path {
      ${active && wrapperModifier.active()}
    }
    :active {
      transform: scale(0.9);
    }
  `}
`;
