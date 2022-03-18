import React from "react";
import PageControllers from "../PageControllers";

import { Container, Personal, Address } from "./styles";

const AnswerableData: React.FC = () => {
  const classPrefix = "input-answer-";
  return (
    <Container>
      <Personal className="section">
        <div className="section-title">
          <h2>Dados pessoais do responsável</h2>
        </div>
        <div className="personal-intern-data sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "name"}>Nome</label>
            <div>
              <input
                type="text"
                name={classPrefix + "name"}
                id={classPrefix + "name"}
              />
            </div>
          </div>
          <div className="phone-sub-section sub-section">
            <div className="input">
              <label htmlFor={classPrefix + "residencial-phone"}>
                Telefone residencial
              </label>
              <div>
                <input
                  type="text"
                  name={classPrefix + "residencial-phone"}
                  id={classPrefix + "residencial-phone"}
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor={classPrefix + "cellphone"}>Celular</label>
              <div>
                <input
                  type="text"
                  name={classPrefix + "cellphone"}
                  id={classPrefix + "cellphone"}
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor={classPrefix + "message-phone"}>
                Telefone pra recado
              </label>
              <div>
                <input
                  type="text"
                  name={classPrefix + "message-phone"}
                  id={classPrefix + "message-phone"}
                />
              </div>
            </div>
            <div className="input">
              <label htmlFor={classPrefix + "talk-to"}>Falar com</label>
              <div>
                <input
                  type="text"
                  name={classPrefix + "talk-to"}
                  id={classPrefix + "talk-to"}
                />
              </div>
            </div>
          </div>
        </div>
      </Personal>

      <Address className="section">
        <div className="section-title">
          <h2>Endereço</h2>
        </div>
        <div className="address-first-line sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "address"}>Rua</label>
            <div>
              <input
                type="text"
                name={classPrefix + "address"}
                id={classPrefix + "address"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "address-number"}>Número</label>
            <div>
              <input type="text" name={classPrefix + "address-number"} />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "address-neighborhood"}>Bairro</label>
            <div>
              <input
                type="text"
                name={classPrefix + "address-neighborhood"}
                id={classPrefix + "address-neighborhood"}
              />
            </div>
          </div>
        </div>
        <div className="address-second-line sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "address-city"}>Cidade</label>
            <div>
              <input
                type="text"
                name={classPrefix + "address-city"}
                id={classPrefix + "address-city"}
              />
            </div>
          </div>
          <div className="address-country-data sub-section">
            <div className="input">
              <label htmlFor={classPrefix + "address-uf"}>UF</label>
              <div>
                <input
                  type="text"
                  name={classPrefix + "address-uf"}
                  id={classPrefix + "address-uf"}
                />
              </div>
            </div>
          </div>
        </div>
      </Address>

      <PageControllers page={2} />
    </Container>
  );
};

export default AnswerableData;
