import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > div {
    margin-bottom: 20px;
    input {
      width: 100%;
    }
  }

  .check-item {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      height: initial;
      width: initial !important;

      margin: 0;
      padding: 0;
    }
    label {
      padding-left: 10px;
    }
  }
`;

export const SubSection = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const Integrant = styled.div`
  .personal-integrant-data {
    grid-template-columns: 2fr 1fr 2fr 1fr 1fr;

    .add-icome {
      margin-top: 22px;
      input {
        padding: 0;
        background: var(--submit-ligth) !important;
      }
    }
  }
`;

export const Income = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`;

export const InternIncome = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  input {
    margin-top: 5px;
  }
`;

export const Dependents = styled.div`
  > div {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 3fr;

    input {
      margin-top: 5px;
      float: left;
    }
  }
`;
