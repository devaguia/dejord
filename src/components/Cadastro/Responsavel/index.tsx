import React from "react";
import Endereco from "../Endereco";

import { Container } from "./styles";

const Responsavel: React.FC = () => {
  const _prefix = "responsavel-";
  return (
    <Container>
      <div className="title">
        <h2>Dados do Responsável</h2>
      </div>
      <div className="fields">
        <div className="field field-lg field-lg-l">
          <input type="text" placeholder="Nome" id={_prefix + "name"}  name={_prefix + "name"} />
        </div>
        <div className="field field-lg field-lg-r">
          <input type="text" placeholder="Parentesco" id={_prefix + "relationship"}  name={_prefix + "relationship"} />
        </div>
      </div>
      <Endereco title="Endereço"/>
    </Container>
  );
};

export default Responsavel;
