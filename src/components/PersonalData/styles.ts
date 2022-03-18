import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > div {
    margin-bottom: 20px;
    input {
      width: 100%;
    }

    .sub-section {
      display: grid;
      grid-gap: 10px;
    }
  }
`;

export const Personal = styled.div`
  .personal-intern-data {
    grid-template-columns: 4fr 2fr;
  }

  .personal-parent-data {
    grid-template-columns: repeat(2, 4fr);
  }

  .personal-aditional-data,
  .personal-entry-data {
    grid-template-columns: repeat(3, 4fr);
  }
`;

export const Documents = styled.div`
  .ducuments-data {
    grid-template-columns: 1fr 2fr;

    > div {
      :nth-child(2n) {
        width: 50%;
      }
    }
  }
`;

export const Address = styled.div`
  .address-city-data {
    grid-template-columns: 3fr 2fr 2fr;
  }

  .address-country-data {
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;

    grid-column: 2;
    > div {
      :nth-child(2) {
        width: 50%;
      }
    }
  }
`;
