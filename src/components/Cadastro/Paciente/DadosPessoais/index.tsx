import React from "react";

import { Container } from "./styles";

const DadosPessoais: React.FC = () => {
  const _prefix = "caracteristicas-";
  return (
    <Container>
      <div className="title">
        <h2>Dados Pessoais</h2>
      </div>
      <div className="fields">
        <div className="field field-lg field-lg-l">
          <input type="text" placeholder="Nome" id={_prefix + "name"}  name={_prefix + "name"} />
        </div>
        <div className="field field-lg field-lg-r">
          <input type="text" placeholder="Apelido" id={_prefix + "nickname"}  name={_prefix + "nickname"} />
        </div>
        <div className="field field-lg field-lg-l">
          <input type="text" placeholder="Pai" id={_prefix + "father-name"}  name={_prefix + "father-name"} />
        </div>
        <div className="field field-lg field-lg-r">
          <input type="text" placeholder="Mãe" id={_prefix + "mother-name"}  name={_prefix + "mother-name"} />
        </div>
        <div className="field">
          <input type="text" placeholder="Data de Nascimento" id={_prefix + "birthdate"}  name={_prefix + "birthdate"} />
        </div>
        <div className="field">
          <input type="number" placeholder="Idade" id={_prefix + "age"}  name={_prefix + "age"} />
        </div>
        <div className="field">
          <input type="text" placeholder="Escolaridade" id={_prefix + "schooling"}  name={_prefix + "schooling"} />
        </div>
        <div className="field">
          <input type="text" placeholder="Profissão" id={_prefix + "occupation"}  name={_prefix + "occupation"} />
        </div>
      </div>
    </Container>
  );
};

export default DadosPessoais;
