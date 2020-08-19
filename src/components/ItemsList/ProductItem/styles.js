import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme: { main } }) => css`
    display: flex;
    align-items: flex-end;

    border: 1px solid ${main.colors.borders[0]};
    border-radius: ${main.sizes.borderRadius};

    padding: ${main.sizes.spacing[1]};

    & + & {
      margin-top: ${main.sizes.spacing[1]};
    }
  `}
`;

export const Image = styled.div`
  flex-shrink: 0;

  width: 65px;
  height: 65px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.main.sizes.spacing[1]};
`;

export const Title = styled.h3`
  ${({ theme: { main } }) => css`
    font-size: ${main.typography.text.sizes[1]};
    font-weight: ${main.typography.weight.regular};
    margin-bottom: ${main.sizes.spacing[1]};
  `}
`;

export const Price = styled.strong`
  display: block;
  text-align: right;
`;
