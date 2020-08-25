import styled, { css } from "styled-components";
import media from "styled-media-query";

export const InputBlock = styled.section`
  ${({ theme: { main } }) => css`
    margin-bottom: ${main.sizes.spacing[3]};
  `}
`;

export const InputGroup = styled.section`
  ${({ theme: { main } }) => css`
    display: flex;

    > ${InputBlock} {
      flex-grow: 1;

      margin-bottom: 0;

      :not(:first-of-type) {
        margin-left: ${main.sizes.spacing[2]};
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme: { main } }) => css`
    font-size: ${main.typography.text.sizes[1]};
    font-weight: ${main.typography.weight.medium};

    color: ${main.typography.text.colors.tertiary};

    ${media.greaterThan("medium")`
        font-size: ${main.typography.text.sizes[3]}
    `}
  `}
`;

export const Input = styled.input`
  ${({ theme: { main }, error }) => css`
    display: block;
    width: 100%;

    font-size: ${main.typography.text.sizes[4]};

    border: 1px solid ${error ? main.colors.error : main.colors.borders[1]};
    border-radius: ${main.sizes.borderRadius};

    box-shadow: inset 0 1px 2px ${main.colors.shadows[1]};

    padding: ${main.sizes.spacing[2]};
    margin-top: ${main.sizes.spacing[1]};

    &::placeholder {
      font-size: ${main.typography.text.sizes[4]};
      color: ${main.typography.text.colors.quartenary};
    }

    &:focus {
      outline: none;
      border-color: ${main.colors.focus};
    }
  `}
`;

export const TextError = styled.span`
  font-size: ${({ theme }) => theme.main.typography.text.sizes[1]};
  color: ${({ theme }) => theme.main.colors.error};
`;
