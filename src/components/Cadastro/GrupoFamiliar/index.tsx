import React from 'react';

import { Container } from './styles';
interface Props {
  title?: string
}

const GrupoFamiliar: React.FC<Props> = ({title}) => {
    const _prefix = "contato-";
    
    return ( 
      <Container>
        <div className="title">
          <h2>Grupo Familiar</h2>
        </div>
        <div className="fields">
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Nome" id={_prefix + "name-relatives"}  name={_prefix + "name-relatives"} />
          </div>
          <div className="field field-lg field-lg-l">
            <input type="number" placeholder="Idade" id={_prefix + "age-relatives"}  name={_prefix + "age-relatives"} />
          </div>
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Parentesco" id={_prefix + "relationship-relatives"}  name={_prefix + "relationship-relatives"} />
          </div>
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Renda" id={_prefix + "income-relatives"}  name={_prefix + "income-relatives"} />
          </div>
          <div className="field field-lg field-lg-l">
            <input type="button" className='btn btn-add' value="Adicionar" id={_prefix + "button-dependents"} />
          </div>
        </div>
      </Container>
    );
};

export default GrupoFamiliar;