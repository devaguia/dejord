import React from "react";
import PageControllers from "../PageControllers";

import { Container, Personal, Documents, Address, SubSection } from "./styles";

const PersonalData: React.FC = () => {
  const componentPrefix = "input-inter-";

  return (
    <Container>
      <Personal className="section">
        <div className="section-title">
          <h2>Informações Pessoais</h2>
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
          <div className="input">
            <label htmlFor={componentPrefix + "nickname"}>Apelido</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "nickname"}
                id={componentPrefix + "nickname"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="personal-parent-data sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "father-name"}>Pai</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "father-name"}
                id={componentPrefix + "father-name"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "mother-name"}>Mãe</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "mother-name"}
                id={componentPrefix + "mother-name"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="personal-aditional-data sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "ocuppation"}>Profissão</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "ocuppation"}
                id={componentPrefix + "ocuppation"}
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
            <label htmlFor={componentPrefix + "phone"}>Telefone</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "phone"}
                id={componentPrefix + "phone"}
              />
            </div>
          </div>
        </SubSection>
        <SubSection className="personal-entry-data sub-section">
          <div className="input">
            <label htmlFor={componentPrefix + "entry"}>Data de entrada</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "entry"}
                id={componentPrefix + "entry"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "departure-date"}>
              Data de saída
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "departure-date"}
                id={componentPrefix + "departure-date"}
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
            <label htmlFor={componentPrefix + "documents-rg"}>RG</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "documents-rg"}
                id={componentPrefix + "documents-rg"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "documents-cpf"}>CPF</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "documents-cpf"}
                id={componentPrefix + "documents-cpf"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "documents-ctps"}>
              Carteira Profissional
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "documents-ctps"}
                id={componentPrefix + "documents-ctps"}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor={componentPrefix + "documents-cnh"}>CNH</label>
            <div>
              <input
                type="text"
                name={componentPrefix + "documents-cnh"}
                id={componentPrefix + "documents-cnh"}
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
              <input
                type="text"
                name={componentPrefix + "address-number"}
                id={componentPrefix + "address-number"}
              />
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
        </SubSection>
        <SubSection className="address-country-data sub-section">
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
          <div className="input">
            <label htmlFor={componentPrefix + "address-naturality"}>
              Naturalidade
            </label>
            <div>
              <input
                type="text"
                name={componentPrefix + "address-naturality"}
                id={componentPrefix + "address-naturality"}
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
