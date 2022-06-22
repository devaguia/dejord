import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  .title {
    span {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    .fields {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 2fr 2fr 2fr;

      .field-lg {
        &-l {
          grid-column: 1 / 3;
        }

        &-m {
          grid-column: 3 / 4;
        }
      }
    }
  }
`;
