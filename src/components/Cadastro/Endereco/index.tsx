import React from 'react';

import { Container } from './styles';
interface Props {
  title?: string
}

const Endereco: React.FC<Props> = ({title}) => {
    const _prefix = "documentos-";
    
    return ( 
        <Container>
          {title && (
              <div className="title">
                <span>{title}</span>
              </div>
            )}  
            <div className="fields">
              <div className="field field-lg field-lg-l">
                <input type="text" placeholder="Rua" id={_prefix + "street"}  name={_prefix + "street"} />
              </div>
              <div className="field">
                <input type="text" placeholder="Número" id={_prefix + "number"}  name={_prefix + "number"} />
              </div>
              <div className="field">
                <input type="text" placeholder="Bairro" id={_prefix + "neighborhod"}  name={_prefix + "neighborhod"} />
              </div>
              <div className="field field-lg field-lg-l">
                <input type="text" placeholder="Cidade" id={_prefix + "city"}  name={_prefix + "city"} />
              </div>
              <div className="field field-lg field-lg-r">
                <input type="text" placeholder="Estado" id={_prefix + "state"}  name={_prefix + "state"} />
              </div>
              <div className="field">
                <input type="text" placeholder="País" id={_prefix + "country"}  name={_prefix + "country"} />
              </div>
              <div className="field">
                <input type="text" placeholder="Nacionalidade" id={_prefix + "nationality"}  name={_prefix + "nationality"} />
              </div>
          </div>
        </Container>
      );
};

export default Endereco;