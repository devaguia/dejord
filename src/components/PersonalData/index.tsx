import React from 'react';

import { Container } from './styles';

const PersonalData: React.FC = () => {
    return (
        <Container>
            <div className='section-title'>
                <h2>Informações Pessoais</h2>
            </div>
            <div className='input'>
                <label htmlFor="input-name">Nome</label>
                <div>
                    <input type="text" name="input-name" id="input-name"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-nickname">Apelido</label>
                <div>
                    <input type="text" name="input-nickname" id="input-nickname"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-father-name">Pai</label>
                <div>
                    <input type="text" name="input-father-name" id="input-father-name"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-mother-name">Mãe</label>
                <div>
                    <input type="text" name="input-mother-name" id="input-mother-name"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-ocuppation">Profissão</label>
                <div>
                    <input type="text" name="input-ocuppation" id="input-ocuppation"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-cellphone">Celular</label>
                <div>
                    <input type="text" name="input-cellphone" id="input-cellphone"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-phone">Telefone</label>
                <div>
                    <input type="text" name="input-phone" id="input-phone"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-entry">Data de entrada</label>
                <div>
                    <input type="text" name="input-entry" id="input-entry"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-departure-date">Data de saída</label>
                <div>
                    <input type="text" name="input-departure-date" id="input-departure-date"/>
                </div>
            </div>


            <div>
                <h2>Endereço</h2>
            </div>
            <div className='input'>
                <label htmlFor="input-address">Rua</label>
                <div>
                    <input type="text" name="input-address" id="input-address"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-address-number">Número</label>
                <div>
                    <input type="text" name="input-address-number" id=""/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-address-neighborhood">Bairro</label>
                <div>
                    <input type="text" name="input-address-neighborhood" id="input-address-neighborhood"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-address-city">Cidade</label>
                <div>
                    <input type="text" name="input-address-city" id="input-address-city"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-address-state">Estado</label>
                <div>
                    <input type="text" name="input-address-state" id="input-address-state"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-address-uf">UF</label>
                <div>
                    <input type="text" name="input-address-uf" id="input-address-uf"/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="input-address-naturality">Naturalidade</label>
                <div>
                    <input type="text" name="input-address-naturality" id="input-address-naturality"/>
                </div>
            </div>


            <div className='section-title'>
                <h2>Documentos</h2>
            </div>
            <div className='input'>
                <label htmlFor="">RG</label>
                <div>
                    <input type="text" name="" id=""/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="">CPF</label>
                <div>
                    <input type="text" name="" id=""/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="">Carteira Profissional</label>
                <div>
                    <input type="text" name="" id=""/>
                </div>
            </div>
            <div className='input'>
                <label htmlFor="">CNH</label>
                <div>
                    <input type="text" name="" id=""/>
                </div>
            </div>
        </Container>
    );
};

export default PersonalData;