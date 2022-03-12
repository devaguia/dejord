import React from 'react';

import { Container, Page, User, UserIcon } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Page>
                <span>Internos</span>
            </Page>
            <User className="header-user">
                <div>
                    <span>Marcos</span>
                </div>
                <UserIcon>
                </UserIcon>
            </User >
        </Container>
    );
};

export default Header;