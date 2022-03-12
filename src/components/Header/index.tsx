import React from 'react';

import { Head, UserIcon } from './styles';

const Header: React.FC = () => {
    return (
        <Head>
            <div className="header-title">
                <span>Internos</span>
            </div>
            <div className="header-user">
                <div className="user-name">
                    <span>Marcos</span>
                </div>
                <div className="user-img">
                    <UserIcon src="./resources/images/147144.png" alt="" />
                </div>
            </div>
        </Head>
    );
};

export default Header;