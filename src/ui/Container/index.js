import styled, { css } from "styled-components";
import media from "styled-media-query";

export default styled.div`
  ${({ theme: { main } }) => css`
    width: calc(100vw - ${main.sizes.spacing[2]});
    margin: 0 auto 50px;

    display: flex;
    flex-direction: column;

    ${media.greaterThan("small")`
        width: 90vw;
        max-width: 700px;
    `}

    ${media.greaterThan("930px")`
      max-width: 1070px;
      flex-direction: row;
    `}
  `}
`;
