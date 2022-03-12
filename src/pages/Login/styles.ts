import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: var(--primary-dark);
`;

export const Logo = styled.img``;

export const Box = styled.div`
  position: absolute;
  top: 25%;
  margin-left: auto;
  margin-right: auto;

  background-color: var(--primary);
  border-radius: 10px;
  min-width: 300px;
  width: 330px;
  height: 350px;
`;

export const Form = styled.form`
  .btn-primary {
    position: relative;
    top: 45px;
    border-radius: 5px;
    width: 90px;
    height: 40px;

    color: var(--text-color);
    background-color: var(--submit-ligth);

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SectionInput = styled.div`
  padding-top: 120px;

  > div {
    position: relative;
    padding-left: 40px;

    > input {
      display: flex;
      height: 40px;
      width: 250px;

      padding-left: 45px;
      border-radius: 5px;
      outline: none;
      color: var(--text-color) !important;
      background-color: var(--primary-dark);
    }
  }
`;

export const UserIcon = styled.img``;

export const PasswordIcon = styled.img``;
