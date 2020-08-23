import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  ${({ theme: { main } }) => css`
    border: 1px solid ${main.colors.borders[2]};
    border-radius: ${main.sizes.borderRadius};

    padding: ${main.sizes.spacing[2]};
  `}
`;

export const Item = styled.div`
  ${({ theme: { main }, highlight }) => css`
    display: flex;
    justify-content: space-between;

    text-transform: uppercase;
    font-size: ${main.typography.text.sizes[3]};

    color: ${highlight ? main.typography.text.colors.secondary : "inhreit"};

    :not(:last-of-type) {
      margin-bottom: ${main.sizes.spacing[1]};
    }

    :last-of-type {
      margin-top: ${main.sizes.spacing[2]};
    }

    ${media.greaterThan("medium")`
      font-size: ${main.typography.text.sizes[4]};
    `}
  `}
`;
