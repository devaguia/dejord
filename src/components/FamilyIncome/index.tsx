import React from "react";
import Button from "../Button";
import PageControllers from "../PageControllers";

import {
  Container,
  SubSection,
  Integrant,
  Income,
  InternIncome,
  Dependents,
} from "./styles";

const FamilyIncome: React.FC = () => {
  const componentPrefix = "input-income-";

  return (
    <Container>
      <Integrant>
        <SubSection className="personal-integrant-data sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "integrant-name"}>Nome</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "integrant-name"}
                id={componentPrefix + "integrant-name"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "integrant-age"}>Idade</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "integrant-age"}
                id={componentPrefix + "integrant-age"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "integrant-occupation"}>
              Profis.
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "integrant-occupation"}
                id={componentPrefix + "integrant-occupation"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "integrant-income"}>Renda</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "integrant-income"}
                id={componentPrefix + "integrant-income"}
              />
            </div>
          </div>
          <div className="add-icome">
            <Button type="button" value="Adicionar" />
          </div>
        </SubSection>
      </Integrant>

      <Income>
        <div className="first-line">
          <div className="input">
            <label htmlFor={componentPrefix + "total-income"}>
              Total de renda
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "total-income"}
                id={componentPrefix + "total-income"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "percapita"}>Percapita</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "percapita"}
                id={componentPrefix + "percapita"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "wather"}>Água</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "wather"}
                id={componentPrefix + "wather"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "gas"}>Gás</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "gas"}
                id={componentPrefix + "gas"}
              />
            </div>
          </div>
        </div>
        <div className="second-line">
          <div className="input">
            <label htmlFor={componentPrefix + "food"}>Alimentação</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "food"}
                id={componentPrefix + "food"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "transport"}>Transporte</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "transport"}
                id={componentPrefix + "transport"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "rent"}>Alugel</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "rent"}
                id={componentPrefix + "rent"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "expense"}>
              Total de despesas
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "expense"}
                id={componentPrefix + "expense"}
              />
            </div>
          </div>
        </div>
      </Income>
      <InternIncome>
        <div className="check-item">
          <input
            type="checkbox"
            id={componentPrefix + "employment-relationship"}
            name={componentPrefix + "employment-relationship"}
          />
          <label htmlFor={componentPrefix + "employment-relationship"}>
            Vínculo empregatício
          </label>
        </div>
        <div className="check-item">
          <input
            type="checkbox"
            id={componentPrefix + "bolsa-familia"}
            name={componentPrefix + "bolsa-familia"}
          />
          <label htmlFor={componentPrefix + "bolsa-familia"}>
            Bolsa Família
          </label>
        </div>
        <div className="check-item">
          <input
            type="checkbox"
            id={componentPrefix + "retirement"}
            name={componentPrefix + "retirement"}
          />
          <label htmlFor={componentPrefix + "retirement"}>Aposentadoria</label>
        </div>
        <div>
          <label htmlFor={componentPrefix + "others-benefits"}>Outros</label>
          <div>
            <input
              type="text"
              name={componentPrefix + "others-benefits"}
              id={componentPrefix + "others-benefits"}
            />
          </div>
        </div>
      </InternIncome>
      <Dependents>
        <div>
          <div className="check-item">
            <input
              type="checkbox"
              id={componentPrefix + "minor-dependents"}
              name={componentPrefix + "minor-dependents"}
            />
            <label htmlFor={componentPrefix + "minor-dependents"}>
              Tem filhos menores
            </label>
          </div>
          <div>
            <label htmlFor={componentPrefix + "dependents-quantity"}>
              Qnt. de filhos
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "dependents-quantity"}
                id={componentPrefix + "dependents-quantity"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="check-item">
            <input
              type="checkbox"
              id={componentPrefix + "pay-pension"}
              name={componentPrefix + "pay-pension"}
            />
            <label htmlFor={componentPrefix + "pay-pension"}>Paga pensão</label>
          </div>
          <div>
            <label htmlFor={componentPrefix + "pension-value"}>Valor</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "pension-value"}
                id={componentPrefix + "pension-value"}
              />
            </div>
          </div>
          <div>
            <label htmlFor={componentPrefix + "dependent-answwerable"}>
              Nome do responsável
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "dependent-answwerable"}
                id={componentPrefix + "dependent-answwerable"}
              />
            </div>
          </div>
        </div>
      </Dependents>
      <PageControllers page={2} />
    </Container>
  );
};

export default FamilyIncome;
