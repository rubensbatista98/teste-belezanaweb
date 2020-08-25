import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  ${({ theme: { main } }) => css`
    display: block;
    width: 100%;

    font-size: ${main.typography.text.sizes[5]};
    font-weight: ${main.typography.weight.bold || "bold"};

    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    color: ${main.buttonPallete.primary.contrastText};
    background-color: ${main.buttonPallete.primary.color};

    border: none;
    border-radius: ${main.sizes.borderRadius};

    box-shadow: 0 2px 4px ${main.colors.shadows[1]},
      inset 0 -3px 0 ${main.buttonPallete.primary.hover.color};

    padding: ${main.sizes.spacing[2]};

    margin-top: ${main.sizes.spacing[3]};

    cursor: pointer;
    trasition: background-color 0.2ms;

    &:hover,
    &:focus {
      color: ${main.buttonPallete.primary.hover.contrastText};
      background-color: ${main.buttonPallete.primary.hover.color};
    }
  `}
`;
