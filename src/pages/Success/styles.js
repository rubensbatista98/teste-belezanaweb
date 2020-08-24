import styled, { css } from "styled-components";
import media from "styled-media-query";

import UIContainer from "../../ui/Container";

export const Container = styled(UIContainer)`
  flex-wrap: wrap;
  margin-bottom: 0;
`;

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.main.sizes.spacing[4]};

  ${media.greaterThan("930px")`
    flex-shrink: 0;  
    min-width: 350px;

    margin-left: ${({ theme }) => theme.main.sizes.spacing[3]};
  `}
`;

export const SuccessMessage = styled.div`
  ${({ theme: { main } }) => css`
    margin: 0 auto ${main.sizes.spacing[3]};

    ${media.greaterThan("930px")`
      margin-bottom: ${main.sizes.spacing[4]};
    `}

    h1 {
      font-size: ${main.typography.title.sizes[1]};
      text-align: center;
      text-transform: uppercase;

      color: ${main.colors.primary};

      margin-top: ${main.sizes.spacing[2]};

      ${media.greaterThan("medium")`
        font-size: ${main.typography.title.sizes[2]};
      `}
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme: { main } }) => css`
    display: block;
    width: 40px;
    height: 40px;

    border: 2px solid ${main.colors.primary};
    border-radius: 50%;

    margin: 0 auto;

    position: relative;

    ::before {
      content: "";

      display: block;
      width: 10px;
      height: 18px;

      border-right: 2px solid ${main.colors.primary};
      border-bottom: 2px solid ${main.colors.primary};

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%) rotate(45deg);

      ${media.greaterThan("medium")`
        width: 15px;
        height: 27px;
      `}
    }

    ${media.greaterThan("medium")`
      width: 60px;
      height: 60px;
    `}
  `}
`;

export const PaymentData = styled.div`
  ${({ theme: { main } }) => css`
    p {
      font-size: ${main.typography.text.sizes[3]};
      text-transform: uppercase;
      line-height: 1.3;

      color: ${main.typography.text.colors.quinternary};

      ${media.greaterThan("medium")`
        font-size: ${main.typography.text.sizes[4]};
      `}
    }
  `}
`;
