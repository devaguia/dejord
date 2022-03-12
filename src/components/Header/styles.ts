import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 55px;
  align-items: center;

  color: $text-color;
  background-color: $primary;

  .header-user {
    display: flex;
    align-items: center;

    .user-name {
      margin-right: 20px;
    }
  }
`;

export const UserIcon = styled.img`
  position: relative;
  max-width: 40px;
`;
