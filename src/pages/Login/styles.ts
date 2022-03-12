import styled, { css } from "styled-components";
import { FaEnvelope, FaKey } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: var(--primary-dark);
`;

export const Logo = styled.img`
  width: 100px;
`;

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
    top: 20px;
    width: 90px;
  }
`;

export const SectionInput = styled.div`
  padding-top: 140px;

  > div {
    position: relative;
    padding-left: 40px;
    margin-bottom: 15px;

    > svg {
      position: absolute;
      left: 50px;
      top: 10px;
    }

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

const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--text-color);
  flex-shrink: 0;
`;

export const UserIcon = styled(FaEnvelope)`
  ${iconsCSS}
`;

export const PasswordIcon = styled(FaKey)`
  ${iconsCSS}
`;
