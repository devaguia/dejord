import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  .title span {
    font-weight: bold;
  }

  .btn-add {
    width: 100%;
  }

  @media (min-width: 768px) {
    .fields {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
