import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
    page: number;
  }

const PageControllers: React.FC<Props> = ({
    page
}) => {

    if (page === 1) {
        return (
            <Container>
                <div className='cancel' >
                    <Link to={`/`}><Button type="button" value="Cancelar"/></Link>
                </div>
                <div className='next' >
                    <Button type="button" value="Próxima"/>
                </div>
            </Container>
        );
    } else if (page === 2) {
        return (
            <Container>
                <div className='cancel' >
                <Link to={`/`}><Button type="button" value="Cancelar"/></Link>
                </div>
                <div className='back' >
                    <Button type="button" value="Voltar"/>
                </div>
                <div className='next' >
                    <Button type="button" value="Próxima"/>
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div className='cancel' >
                    <Link to={`/`}><Button type="button" value="Cancelar"/></Link>
                </div>
                <div className='back' >
                    <Button type="button" value="Voltar"/>
                </div>
                <div className='next' >
                    <Link to={`/`}><Button type="button" value="Finalizar"/></Link>
                </div>
            </Container>
        );
    }
};

export default PageControllers;