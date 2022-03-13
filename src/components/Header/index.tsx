import React from 'react';

import { Container, Page, User, UserIcon } from './styles';

interface Props {
    title: string
}

const Header: React.FC <Props> = ({title}) => {
    return (
        <Container>
            <Page>
                <span>{title}</span>
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