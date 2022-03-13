import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding-bottom: 30px;
  background: var(--primary-dark);

  .title {
    position: relative;
    color: var(--text-color);
    top: 40px;
    left: 5%;
  }
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  align-content: center;
  left: 5%;

  background-color: var(--primary);
  width: 90%;
  border-radius: 10px;
  padding-bottom: 30px;
  padding-top: 20px;
  margin-top: 50px;
`;
