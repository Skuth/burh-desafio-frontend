import { styled } from "styled-components";

export const MainContent = styled.main`
  .dashboard-loading {
    margin: 20px auto;

    font-size: 22px;
    font-weight: 700;
    color: var(--color-blue);
  }

  @media (min-width: 800px) {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
`;
