import React from 'react';

import { Container, Logo, Form, SectionInput, UserIcon, PasswordIcon, Box } from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <div>
                <Logo />
            </div>
            <Box>
                <Form>
                    <SectionInput>
                        <div>
                            <UserIcon src='' alt=''/>
                            <input className='input-txt input-txt-login' id='input-email' placeholder='E-mail'/>
                        </div>
                        <div>
                            <PasswordIcon src='' alt=''/>
                            <input className='input-txt input-txt-login' id='input-password' type="password" placeholder='Senha'/>
                        </div>
                    </SectionInput>
                    <div>
                        <input className='btn-primary' type='submit' value='Entrar' />
                    </div>
                </Form>
            </Box>
        </Container>
    );
};

export default Login;