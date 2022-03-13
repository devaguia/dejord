import React from 'react';

import { Link } from 'react-router-dom';
import { Container, EditIcon, DownloadIcon } from './styles';

interface Props {
    id: number;
    date: string;
    name: string;
    age: number;
    cpf: string;
}

const InternList: React.FC<Props> = ({
    id,
    date,
    name,
    age,
    cpf
}) => {
    return (
        <Container>
            <li>{id}</li>
            <li>{date}</li>
            <li>{name}</li>
            <li>{age}</li>
            <li>{cpf}</li>
            <li><Link to={`/edit/`}><EditIcon /></Link></li>
            <li><Link to={`/download/`}><DownloadIcon /></Link></li>
        </Container>
    );
};

export default InternList;