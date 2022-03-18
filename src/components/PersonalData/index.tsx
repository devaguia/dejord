import React from "react";
import PageControllers from "../PageControllers";

import { Container, Personal, Documents, Address, SubSection } from "./styles";

const PersonalData: React.FC = () => {
  const classPrefix = "input-inter-";

  return (
    <Container>
      <Personal className="section">
        <div className="section-title">
          <h2>Informações Pessoais</h2>
        </div>
        <SubSection className="personal-intern-data sub-section">
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
          <div className="input">
            <label htmlFor={classPrefix + "nickname"}>Apelido</label>
            <div>
              <input
                type="text"
                name={classPrefix + "nickname"}
                id={classPrefix + "nickname"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="personal-parent-data sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "father-name"}>Pai</label>
            <div>
              <input
                type="text"
                name={classPrefix + "father-name"}
                id={classPrefix + "father-name"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "mother-name"}>Mãe</label>
            <div>
              <input
                type="text"
                name={classPrefix + "mother-name"}
                id={classPrefix + "mother-name"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="personal-aditional-data sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "ocuppation"}>Profissão</label>
            <div>
              <input
                type="text"
                name={classPrefix + "ocuppation"}
                id={classPrefix + "ocuppation"}
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
            <label htmlFor={classPrefix + "phone"}>Telefone</label>
            <div>
              <input
                type="text"
                name={classPrefix + "phone"}
                id={classPrefix + "phone"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="personal-entry-data sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "entry"}>Data de entrada</label>
            <div>
              <input
                type="text"
                name={classPrefix + "entry"}
                id={classPrefix + "entry"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "departure-date"}>
              Data de saída
            </label>
            <div>
              <input
                type="text"
                name={classPrefix + "departure-date"}
                id={classPrefix + "departure-date"}
              />
            </div>
          </div>
        </SubSection>
      </Personal>
      <Documents className="section">
        <div className="section-title">
          <h2>Documentos</h2>
        </div>
        <SubSection className="ducuments-data sub-section">
          <div className="input">
            <label htmlFor={classPrefix + "documents-rg"}>RG</label>
            <div>
              <input
                type="text"
                name={classPrefix + "documents-rg"}
                id={classPrefix + "documents-rg"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "documents-cpf"}>CPF</label>
            <div>
              <input
                type="text"
                name={classPrefix + "documents-cpf"}
                id={classPrefix + "documents-cpf"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "documents-ctps"}>
              Carteira Profissional
            </label>
            <div>
              <input
                type="text"
                name={classPrefix + "documents-ctps"}
                id={classPrefix + "documents-ctps"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={classPrefix + "documents-cnh"}>CNH</label>
            <div>
              <input
                type="text"
                name={classPrefix + "documents-cnh"}
                id={classPrefix + "documents-cnh"}
              />
            </div>
          </div>
        </SubSection>
      </Documents>
      <Address className="section">
        <div className="section-title">
          <h2>Endereço</h2>
        </div>
        <SubSection className="address-city-data sub-section">
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
              <input
                type="text"
                name={classPrefix + "address-number"}
                id={classPrefix + "address-number"}
              />
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
        </SubSection>
        <SubSection className="address-country-data sub-section">
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
          <div className="input">
            <label htmlFor={classPrefix + "address-naturality"}>
              Naturalidade
            </label>
            <div>
              <input
                type="text"
                name={classPrefix + "address-naturality"}
                id={classPrefix + "address-naturality"}
              />
            </div>
          </div>
        </SubSection>
      </Address>
      <PageControllers page={1} />
    </Container>
  );
};

export default PersonalData;
