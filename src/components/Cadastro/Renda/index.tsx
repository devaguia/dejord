import React from "react";

import { Container } from "./styles";

const Renda: React.FC = () => {
  const _prefix = "renda-";
  return (
    <Container>
      <div className="title">
        <h2>Renda Familiar</h2>
      </div>
      <div>
        <div className="title">
          <span>Despesas</span>
        </div>
        <div className="fields fields-expense">
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Despesa" id={_prefix + "name-expense"}  name={_prefix + "name-expense"} />
          </div>
          <div className="field field-lg field-lg-r">
            <input type="text" placeholder="Valor" id={_prefix + "valor-expense"}  name={_prefix + "valor-expense"} />
          </div>
          <div className="field">
            <input type="button" className="btn btn-add" id={_prefix + "button-expense"}  value="Adicionar" name={_prefix + "button-expense"} />
          </div>
        </div>
      </div>
      <div>
        <div className="title">
          <span>Benefícios</span>
        </div>
        <div className="fields fields-benefits">
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Bolsa Família" id={_prefix + "family-benefits"}  name={_prefix + "family-benefits"} />
          </div>
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Aposentadoria" id={_prefix + "retirement-benefits"}  name={_prefix + "retirement-benefits"} />
          </div>
          <div className="field field-lg field-lg-l">
            <input type="text" placeholder="Outros" id={_prefix + "outhers-benefits"}  name={_prefix + "outhers-benefits"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Renda;
