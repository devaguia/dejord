import React from "react";

import { Container } from "./styles";

const Documentos: React.FC = () => {
  const _prefix = "documentos-";

  return ( 
      <Container>
        <div className="title">
            <h2>Documentos</h2>
          </div>
          <div className="fields">
            <div className="field field-lg field-lg-l">
              <input type="text" placeholder="Cédula de identidade" id={_prefix + "identity"}  name={_prefix + "identity"} />
            </div>
            <div className="field field-lg field-lg-r">
              <input type="text" placeholder="CPF" id={_prefix + "cpf"}  name={_prefix + "cpf"} />
            </div>
            <div className="field field-lg field-lg-l">
              <input type="text" placeholder="Carteira Profissional" id={_prefix + "professional-id"}  name={_prefix + "professional-id"} />
            </div>
            <div className="field field-lg field-lg-r">
              <input type="text" placeholder="Nome" id={_prefix + "cnh"}  name={_prefix + "cnh"} />
            </div>
        </div>
      </Container>
    );
};

export default Documentos;
