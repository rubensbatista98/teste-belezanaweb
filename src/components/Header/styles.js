import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.header`
  max-width: 100vw;

  ${({ theme: { main } }) => css`
    background-color: ${main.colors.white};
    margin-bottom: ${main.sizes.spacing[2]};

    ${media.greaterThan("medium")`
      margin-bottom: ${main.sizes.spacing[4]};
    `}
  `}
`;

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { main } }) => css`
    padding: ${main.sizes.spacing[1]} ${main.sizes.spacing[2]};

    ${media.greaterThan("medium")`
      padding: ${main.sizes.spacing[2]} ${main.sizes.spacing[3]};
    `}
  `}
`;

export const Step = styled.strong`
  text-transform: uppercase;

  ${({ theme: { main }, active }) => css`
    color: ${active
      ? main.typography.text.colors.secondary
      : main.typography.text.colors.tertiary};
  `}
`;
