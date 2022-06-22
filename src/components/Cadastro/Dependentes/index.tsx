import React from "react";

import { Container } from "./styles";

const Dependentes: React.FC = () => {
  const _prefix = "dependents-";

  return (
    <Container>
      <div className="title">
        <h2>Dependentes</h2>
      </div>
      <div className="fields">
        <div className="field field-lg field-lg-l">
          <input
            type="text"
            placeholder="Nome"
            id={_prefix + "name-dependents"}
            name={_prefix + "name-dependents"}
          />
        </div>
        <div className="field field-lg field-lg-l">
          <input
            type="number"
            placeholder="Idade"
            id={_prefix + "age-dependents"}
            name={_prefix + "age-dependents"}
          />
        </div>
        <div className="field field-lg field-lg-l">
          <input
            type="text"
            placeholder="Valor da Pensão"
            id={_prefix + "pension-dependents"}
            name={_prefix + "pension-dependents"}
          />
        </div>
        <div className="field field-lg field-lg-l">
          <input
            type="text"
            placeholder="Responsável"
            id={_prefix + "answerable-dependents"}
            name={_prefix + "answerable-dependents"}
          />
        </div>
        <div className="field">
          <input
            type="button"
            className="btn btn-add"
            value="Adicionar"
            id={_prefix + "button-dependents"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Dependentes;
