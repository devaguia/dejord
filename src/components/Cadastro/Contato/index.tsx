import React from 'react';

import { Container } from './styles';
interface Props {
  title?: string
}

const Contato: React.FC<Props> = ({title}) => {
    const _prefix = "contato-";
    
    return ( 
        <Container>
          {title && (
              <div className="title">
                <span>{title}</span>
              </div>
            )}  
            <div className="fields">
              <div className="field field-lg field-lg-l">
                <input type="text" placeholder="Telefone Residencial" id={_prefix + "residencial-phone"}  name={_prefix + "residencial-phone"} />
              </div>
              <div className="field">
                <input type="text" placeholder="Telefone Celular" id={_prefix + "cellphone"}  name={_prefix + "cellphone"} />
              </div>
          </div>
        </Container>
      );
};

export default Contato;