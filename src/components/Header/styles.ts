import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 55px;
  align-items: center;

  color: var(--text-color);
  font-weight: 600;
  background-color: var(--primary);
`;

export const Page = styled.div``;

export const User = styled.div`
  :nth-child(2) {
    display: flex;
    align-items: center;

    span {
      margin-right: 35px;
    }
  }
`;

export const UserIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 15px;
  max-width: 60px;
  width: 45px;
  height: 45px;
  border-radius: 50%;

  background-color: var(--primary-dark);

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;
