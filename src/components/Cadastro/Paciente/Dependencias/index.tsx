import React from "react";

import { Container } from "./styles";

const Dependencias: React.FC = () => {
  const _prefix = "dependencias-";
  return (
    <Container>
      <div className="title">
        <span>Dependências</span>
      </div>

      <div className="fields">
        <div className="field">
          <input
            type="text"
            placeholder="Substância"
            id={_prefix + "substancia"}
            name={_prefix + "substancia"}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Tempo"
            id={_prefix + "tempo"}
            name={_prefix + "tempo"}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Frequência"
            id={_prefix + "frequencia"}
            name={_prefix + "frequencia"}
          />
        </div>
        <div className="field">
          <input
            type="button"
            className="btn btn-add"
            value="Adicionar"
            id={_prefix + "add_dependencia"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Dependencias;
