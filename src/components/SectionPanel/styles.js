import styled, { css } from "styled-components";

export const Container = styled.section`
  margin-bottom: ${({ theme }) => theme.main.sizes.spacing[3]};
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
    font-weight: ${main.typography.weight.bold};
    text-transform: uppercase;
    color: ${main.typography.title.colors.primary};

    margin-left: ${main.sizes.spacing[1]};
    margin-bottom: ${main.sizes.spacing[1]};
  `}
`;
