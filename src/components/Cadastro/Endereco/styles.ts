import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  .title span {
    font-weight: bold;
  }

  input {
    width: 100%;
  }

  @media (min-width: 768px) {
    .fields {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1080px) {
    .fields {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(4, 1fr);

      .field-lg {
        &-l {
          grid-column: 1 / 3;
        }

        &-r {
          grid-column: 3 / 5;
        }
      }
    }
  }
`;
