import React from 'react';

import { Container, Box } from './styles';
import Header from '../../components/Header';
import PersonalData from '../../components/PersonalData';

const Cadastro: React.FC = () => {
    return (
        <Container>
            <Header title="Cadastro"/>
            <Box>
                <PersonalData />
            </Box>
        </Container>
    );
};

export default Cadastro;