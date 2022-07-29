import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 64px 32px;
    max-width: 658px;
    box-shadow: 0px 4px 139px rgba(228, 228, 228, 0.4);
    border-radius: 16px;
    margin: 0 auto;
    position: relative;
    @media (max-width: ${theme.media.mobile}) {
      padding: 32px 16px;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    @media (max-width: ${theme.media.mobile}) {
      gap: 16px;
    }
  `}
`;
export const Close = styled.button`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    background: none;
    border: none;
    right: 32px;
    top: 64px;

    @media (max-width: ${theme.media.mobile}) {
      right: 16px;
      top: 32px;
    }
  `}
`;
export const FormItem = styled.div``;

export const FormItemGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    @media (max-width: ${theme.media.mobile}) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  `}
`;

export const RadioGrid = styled.div`
  padding-top: 8px;
  display: flex;
  gap: 12px;
  justify-content: start;
`;

export const Label = styled.h2`
  ${({ theme }) => css`
    display: block;
    font-weight: 600;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    display: block;
    font-weight: 500;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[500]};
  `}
`;

export const FormHead = styled.div``;
export const FormFooter = styled.div`
  padding-top: 32px;
`;
