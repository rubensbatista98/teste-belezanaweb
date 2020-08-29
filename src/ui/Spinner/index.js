import styled, { css } from "styled-components";

export default styled.div`
  ${({ theme }) => css`
    border: 8px solid ${theme.main.colors.shadows[1]};
    border-left-color: ${theme.main.colors.primary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`;
