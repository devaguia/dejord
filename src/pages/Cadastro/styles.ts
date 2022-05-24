import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary-dark);

  .btn-add {
        background-color: var(--submit-ligth) !important;
        color: var(--text-color);
        border-radius: 5px;
        text-align: center;
        padding: 0;

        &:hover {
            cursor: pointer;
            transition: 0.5s;
            transform: translate(0px, -1px);
            filter: brightness(95%);
            cursor: pointer;
        }
    }

`;

export const Body = styled.div`
  position: relative;
  display: flex;
  top: 20px;
  margin-bottom: 50px;
  left: 10%;

  background-color: var(--primary);
  width: 80%;
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 10px;

  color: var(--text-color);

  input {
    height: 40px;
    background: var(--primary-dark) !important;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .input {
    > div {
      margin-top: 5px;
    }
  }

  .section-title {
    margin-bottom: 20px;
  }
`;