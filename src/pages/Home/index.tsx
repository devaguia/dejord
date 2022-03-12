import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { Container, Search, SearchIcon } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />

            <Search>
                <div className="search-section">
                    <SearchIcon />
                    <input type="text" id="search-input" placeholder="Digite para filtrar" />
                </div>
                <div className="action-section">
                    <Button type="button" value="Cadastrar Interno" />
                </div>
            </Search>
            
        </Container>
    );
};

export default Home;