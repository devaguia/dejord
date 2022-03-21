import React from "react";
import PageControllers from "../PageControllers";

import { Container, Personal, Address, SubSection } from "./styles";

const AnswerableData: React.FC = () => {
  const componentPrefix = "input-answer-";
  return (
    <Container>
      <Personal className="section">
        <div className="section-title">
          <h2>Dados pessoais do responsável</h2>
        </div>
        <SubSection className="personal-intern-data sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "name"}>Nome</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "name"}
                id={componentPrefix + "name"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="phone-sub-section sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "residencial-phone"}>
              Telefone residencial
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "residencial-phone"}
                id={componentPrefix + "residencial-phone"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "cellphone"}>Celular</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "cellphone"}
                id={componentPrefix + "cellphone"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "message-phone"}>
              Telefone pra recado
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "message-phone"}
                id={componentPrefix + "message-phone"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "talk-to"}>Falar com</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "talk-to"}
                id={componentPrefix + "talk-to"}
              />
            </div>
          </div>
        </SubSection>
      </Personal>

      <Address className="section">
        <div className="section-title">
          <h2>Endereço</h2>
        </div>
        <SubSection className="address-first-line sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "address"}>Rua</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "address"}
                id={componentPrefix + "address"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "address-number"}>Número</label>
            <div>
              <input type="text" name={componentPrefix + "address-number"} />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "address-neighborhood"}>
              Bairro
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "address-neighborhood"}
                id={componentPrefix + "address-neighborhood"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="address-second-line sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "address-city"}>Cidade</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "address-city"}
                id={componentPrefix + "address-city"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "address-uf"}>UF</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "address-uf"}
                id={componentPrefix + "address-uf"}
              />
            </div>
          </div>
        </SubSection>
      </Address>

      <PageControllers page={2} />
    </Container>
  );
};

export default AnswerableData;
