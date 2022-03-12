import React from 'react';
import Button from '../../components/Button';

import { Container, Logo, Form, SectionInput, UserIcon, PasswordIcon, Box } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <div>
                <Logo src="resources/images/logo.svg" alt='logo'/>
            </div>
            <Box>
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
                        <Button className='btn-primary' type='submit' value='Entrar' />
                    </div>
                </Form>
            </Box>
        </Container>
    );
};

export default Login;