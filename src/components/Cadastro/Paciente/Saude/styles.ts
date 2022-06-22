import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-weight: 600;
  }

  .fields {
    > div {
      margin: 10px 0;

      .field {
        > div {
          margin: 10px 0;
        }

        input[type="checkbox"] {
          width: initial;
        }

        label {
          position: relative;
          bottom: 15px;
          font-size: 14px;
          margin-left: 10px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    > .fields {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      align-items: flex-end;
    }
  }
`;
