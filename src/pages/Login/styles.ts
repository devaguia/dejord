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

export const Logo = styled.div`
  max-width: 150px;
  margin: 50px auto 20px auto;
  img {
    width: 100%;
  }
`;

export const Box = styled.div`
  background-color: var(--primary);
  border-radius: 10px;
  width: 300px;
  min-height: 350px;

  @media (min-width: 768px) {
    width: 330px;
  }
`;

export const Form = styled.form`
  .btn-primary {
    position: relative;
    top: 20px;
    width: 90px;
  }
`;

export const SectionInput = styled.div`

  > div {
    position: relative;
    padding-left: 25px;
    margin-bottom: 15px;

    > svg {
      position: absolute;
      left: 40px;
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

  @media (min-width: 768px) {
    > div {
      padding-left: 40px;

      > svg {
        left: 50px;
      }
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
