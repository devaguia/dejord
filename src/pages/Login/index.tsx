import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container, Logo, Form, SectionInput, UserIcon, PasswordIcon, Box } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <Box>
                <Logo>   
                    <img src={`${process.env.REACT_APP_PUBLIC_URL}/images/logo.png`} alt='logo dejord'></img>
                </Logo>
                <Form>
                    <SectionInput>
                        <div>
                            <UserIcon />
                            <input className='input-txt input-txt-login' id='input-email' placeholder='E-mail'/>
                        </div>
                        <div>
                            <PasswordIcon />
                            <input className='input-txt input-txt-login' id='input-password' type="password" placeholder='Senha'/>
                        </div>
                    </SectionInput>
                    <div>
                        <Link to={`/pacientes`}>
                            <Button className='btn-primary' type='submit' value='Entrar' />
                        </Link>
                    </div>
                </Form>
            </Box>
        </Container>
    );
};

export default Login;