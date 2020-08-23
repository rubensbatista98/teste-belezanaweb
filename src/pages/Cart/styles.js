import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.main.sizes.spacing[4]};

  ${media.greaterThan("930px")`
    flex-shrink: 0;  
    min-width: 350px;

    margin-left: ${({ theme }) => theme.main.sizes.spacing[3]};
  `}
`;
