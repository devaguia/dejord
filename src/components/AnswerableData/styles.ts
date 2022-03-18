import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > div {
    margin-bottom: 20px;
    input {
      width: 100%;
    }
  }
`;

export const SubSection = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const Personal = styled.div`
  .phone-sub-section {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Address = styled.div`
  .address-first-line {
    grid-template-columns: 3fr 1fr 2fr;
  }

  .address-second-line {
    grid-template-columns: 5fr 1fr 1fr 1fr 1fr;
  }
`;
