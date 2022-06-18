import React from "react";

import { Container, Page, User, UserIcon } from "./styles";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Page>
        <span>{title}</span>
      </Page>
      <User className="header-user">
        <div>
          <span>Administrador</span>
        </div>
        <UserIcon>
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/images/user.svg`}
            alt="User icon"
          />
        </UserIcon>
      </User>
    </Container>
  );
};

export default Header;
