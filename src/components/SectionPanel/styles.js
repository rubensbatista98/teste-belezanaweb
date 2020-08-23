import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  ${({ theme: { main } }) => css`
    background-color: ${main.colors.white};

    box-shadow: 1px 1px 5px ${main.colors.shadows[0]};
    border-radius: ${main.sizes.borderRadius};

    padding: ${main.sizes.spacing[2]};
  `}
`;

export const Title = styled.h2`
  ${({ theme: { main } }) => css`
    font-size: ${main.typography.title.sizes[1]};
    font-weight: ${main.typography.weight.medium};
    text-transform: uppercase;

    color: ${main.typography.title.colors.primary};

    margin-left: ${main.sizes.spacing[1]};
    margin-bottom: ${main.sizes.spacing[1]};

    ${media.greaterThan("medium")`
      font-size: ${main.typography.title.sizes[2]};
    `}
  `}
`;
