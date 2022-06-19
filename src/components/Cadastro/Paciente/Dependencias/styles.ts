import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .fields {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
