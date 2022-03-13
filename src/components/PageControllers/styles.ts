import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-right: 10px;
    width: 150px;

    input {
      padding: 0;
    }
  }

  .cancel {
    input {
      background-color: #c8c8c8 !important;
      color: var(--primary-dark);
    }
  }
  .next {
    input {
      background-color: var(--submit-ligth) !important;
    }
  }
  .back {
    input {
      background-color: var(--primary-dark) !important;
    }
  }
`;
